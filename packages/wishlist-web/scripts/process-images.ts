#!/usr/bin/env bun
/**
 * Build script to download and process item images for themed display.
 *
 * For static GIFs:
 * - Makes white backgrounds transparent
 * - Recolors black outlines to the theme's foreground color
 * - Outputs to public/itemimages/light/ and public/itemimages/dark/
 *
 * For animated GIFs:
 * - Adds filename to animated manifest (processed at runtime via mix-blend-mode)
 */

import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import { iotms } from "../../wishlist-shared/data/iotms";

const CDN_BASE = "https://s3.amazonaws.com/images.kingdomofloathing.com/itemimages";
const OUTPUT_DIR = join(import.meta.dirname, "../public/itemimages");
const MANIFEST_PATH = join(import.meta.dirname, "../src/data/animatedImages.json");

// Theme colors (OKLCH converted to RGB)
// Light: oklch(26.7% 0.048517 219.8) → dark teal
// Dark: oklch(93.1% 0.026033 92.4) → cream
const COLORS = {
  light: {
    foreground: { r: 47, g: 66, b: 75 },
    accent: { r: 175, g: 147, b: 61 }, // for mracc.gif
  },
  dark: {
    foreground: { r: 239, g: 233, b: 220 },
    accent: { r: 244, g: 214, b: 128 }, // for mracc.gif
  },
};

// Images that use accent color instead of foreground
const ACCENT_IMAGES = new Set(["mracc.gif"]);

// Additional images not in iotms data
const EXTRA_IMAGES = ["meat.gif", "mracc.gif"];

async function downloadImage(filename: string): Promise<Buffer | null> {
  const url = `${CDN_BASE}/${filename}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to download ${filename}: ${response.status}`);
      return null;
    }
    return Buffer.from(await response.arrayBuffer());
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
    return null;
  }
}

async function isAnimatedGif(buffer: Buffer): Promise<boolean> {
  // Use sharp to check if the GIF has multiple pages (frames)
  try {
    const metadata = await sharp(buffer, { animated: true }).metadata();
    return (metadata.pages ?? 1) > 1;
  } catch {
    return false;
  }
}

async function processStaticImage(
  buffer: Buffer,
  filename: string,
  theme: "light" | "dark"
): Promise<Buffer> {
  const colorSet = ACCENT_IMAGES.has(filename) ? "accent" : "foreground";
  const { r, g, b } = COLORS[theme][colorSet];

  // Get image metadata and raw pixels
  const image = sharp(buffer);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  if (!width || !height) {
    throw new Error(`Could not get dimensions for ${filename}`);
  }

  // Extract raw RGBA pixels
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);

  // Process each pixel
  // Strategy: white background → transparent, dark outlines → theme color
  // Anti-aliased pixels (gray) get proportional alpha for smooth edges
  const WHITE_THRESHOLD = 250; // Above this = fully transparent
  const BLACK_THRESHOLD = 50; // Below this = fully opaque

  for (let i = 0; i < pixels.length; i += 4) {
    const pr = pixels[i];
    const pg = pixels[i + 1];
    const pb = pixels[i + 2];

    // Calculate luminance (how "white" the pixel is)
    const luminance = (pr + pg + pb) / 3;

    if (luminance >= WHITE_THRESHOLD) {
      // White-ish pixels become fully transparent
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      pixels[i + 3] = 0;
    } else if (luminance <= BLACK_THRESHOLD) {
      // Dark pixels become fully opaque theme color
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = 255;
    } else {
      // Anti-aliased gray pixels: interpolate alpha
      // Map luminance from [BLACK_THRESHOLD, WHITE_THRESHOLD] to alpha [255, 0]
      const t = (luminance - BLACK_THRESHOLD) / (WHITE_THRESHOLD - BLACK_THRESHOLD);
      const alpha = Math.round((1 - t) * 255);
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = alpha;
    }
  }

  // Reconstruct the image
  return sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();
}

async function main() {
  console.log("Starting image processing...\n");

  // Create output directories
  const lightDir = join(OUTPUT_DIR, "light");
  const darkDir = join(OUTPUT_DIR, "dark");
  await mkdir(lightDir, { recursive: true });
  await mkdir(darkDir, { recursive: true });
  await mkdir(join(import.meta.dirname, "../src/data"), { recursive: true });

  // Collect unique image filenames
  const imageSet = new Set<string>();
  for (const item of iotms) {
    if (item.img) {
      imageSet.add(item.img);
    }
  }
  for (const img of EXTRA_IMAGES) {
    imageSet.add(img);
  }

  const images = Array.from(imageSet).sort();
  console.log(`Found ${images.length} unique images to process\n`);

  const animatedImages: string[] = [];
  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const filename of images) {
    process.stdout.write(`Processing ${filename}... `);

    const buffer = await downloadImage(filename);
    if (!buffer) {
      console.log("FAILED (download)");
      failed++;
      continue;
    }

    const isAnimated = await isAnimatedGif(buffer);
    if (isAnimated) {
      console.log("ANIMATED (skipped)");
      animatedImages.push(filename);
      skipped++;
      continue;
    }

    try {
      // Process for both themes
      const [lightBuffer, darkBuffer] = await Promise.all([
        processStaticImage(buffer, filename, "light"),
        processStaticImage(buffer, filename, "dark"),
      ]);

      // Save as PNG (smaller and supports transparency)
      const pngFilename = filename.replace(/\.gif$/i, ".png");
      await Promise.all([
        writeFile(join(lightDir, pngFilename), lightBuffer),
        writeFile(join(darkDir, pngFilename), darkBuffer),
      ]);

      console.log("OK");
      processed++;
    } catch (error) {
      console.log(`FAILED (${error})`);
      failed++;
    }
  }

  // Write animated images manifest
  await writeFile(MANIFEST_PATH, JSON.stringify(animatedImages, null, 2));

  console.log("\n--- Summary ---");
  console.log(`Processed: ${processed}`);
  console.log(`Animated (skipped): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nAnimated images manifest: ${MANIFEST_PATH}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);
