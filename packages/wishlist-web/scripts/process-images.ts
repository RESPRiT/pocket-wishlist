#!/usr/bin/env bun
// I had claude generate this and I just skimmed the code -- it works
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

import { existsSync } from "fs";
import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import sharp from "sharp";
import { iotms } from "../../wishlist-shared/data/iotms";

const CDN_BASE =
  "https://s3.amazonaws.com/images.kingdomofloathing.com/itemimages";
const OUTPUT_DIR = join(import.meta.dirname, "../public/itemimages");
const MANIFEST_PATH = join(
  import.meta.dirname,
  "../src/data/animatedImages.json",
);

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

// By default this is incremental: an image whose themed PNGs already exist (or
// that's already recorded as animated) is left untouched, so the daily IOTM
// update run only fetches + processes the handful of newly-added items rather
// than re-downloading all ~260 each time. `--force` reprocesses everything,
// for theme-color changes or a clean rebuild.
// — claude 06de4a57, 2026-06-02
const FORCE = process.argv.includes("--force");

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

async function readManifest(): Promise<string[]> {
  if (!existsSync(MANIFEST_PATH)) return [];
  try {
    const parsed = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
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
  theme: "light" | "dark",
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
      const t =
        (luminance - BLACK_THRESHOLD) / (WHITE_THRESHOLD - BLACK_THRESHOLD);
      const alpha = Math.round((1 - t) * 255);
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = alpha;
    }
  }

  // Reconstruct the image with optimized PNG settings
  return sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({
      // Use indexed palette - faster to decode since we only have ~256 color variations
      // (one theme color at different alpha levels)
      palette: true,
      quality: 100, // Keep full quality for the palette
      effort: 10, // max compression
    })
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

  // Seed from the existing manifest so an incremental run preserves animated
  // entries it skips (their filenames live only here — there are no PNGs to
  // detect them by). New animated images union in; nothing is dropped.
  // — claude 06de4a57, 2026-06-02
  const animatedSet = new Set<string>(await readManifest());

  let processed = 0;
  let cached = 0;
  let skipped = 0;
  let failed = 0;

  for (const filename of images) {
    const pngFilename = filename.replace(/\.gif$/i, ".png");

    // Already done: both themed PNGs on disk, or known-animated from a prior
    // run. Skip the network + sharp work unless --force.
    if (
      !FORCE &&
      (animatedSet.has(filename) ||
        (existsSync(join(lightDir, pngFilename)) &&
          existsSync(join(darkDir, pngFilename))))
    ) {
      cached++;
      continue;
    }

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
      animatedSet.add(filename);
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

  // Write animated images manifest (sorted for a stable, diff-friendly file)
  const animatedImages = Array.from(animatedSet).sort();
  await writeFile(
    MANIFEST_PATH,
    JSON.stringify(animatedImages, null, 2) + "\n",
  );

  console.log("\n--- Summary ---");
  console.log(`Processed: ${processed}`);
  console.log(`Cached (already done): ${cached}`);
  console.log(`Animated (skipped): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nAnimated images manifest: ${MANIFEST_PATH}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);
