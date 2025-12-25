import React from "react";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@tanstack/react-router";
import { useCachedImage } from "@/hooks/useCachedImage";
import { useTheme } from "@/contexts/ThemeContext";
import animatedImages from "@/data/animatedImages.json";

const animatedSet = new Set(animatedImages);

// TODO: Clean up some of this logic, because right now it's gross
function ThemedImg({
  className,
  style,
  src,
  alt,
  reColor,
  bgColor,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  reColor: string;
  bgColor?: string;
}) {
  // Extract filename from src (e.g., "itemimages/meat.gif" -> "meat.gif")
  const filename = src.split("/").pop() ?? "";
  const isAnimated = animatedSet.has(filename);

  if (isAnimated) {
    return (
      <AnimatedThemedImg
        className={className}
        style={style}
        src={src}
        alt={alt}
        reColor={reColor}
        bgColor={bgColor}
        {...props}
      />
    );
  }

  return (
    <StaticThemedImg
      className={className}
      style={style}
      alt={alt}
      filename={filename}
      bgColor={bgColor}
      {...props}
    />
  );
}

/** Static images: use pre-rendered themed PNGs */
function StaticThemedImg({
  className,
  style,
  alt,
  filename,
  bgColor,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  alt: string;
  filename: string;
  bgColor?: string;
}) {
  const { theme } = useTheme();
  // Convert .gif to .png and build themed path
  const pngFilename = filename.replace(/\.gif$/i, ".png");
  const themedSrc = `/itemimages/${theme}/${pngFilename}`;
  const { imgSrc } = useCachedImage(themedSrc);

  return (
    <div className="grid select-none">
      {bgColor && <div className={cn("col-start-1 row-start-1", bgColor)} />}
      <div className={cn("col-start-1 row-start-1", className)} {...props}>
        <ClientOnly>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={alt}
              style={style}
              className="h-full w-full object-cover"
            />
          )}
        </ClientOnly>
      </div>
    </div>
  );
}

/** Animated images: use mix-blend-mode approach (fetched from CDN) */
function AnimatedThemedImg({
  className,
  style,
  src,
  alt,
  reColor,
  bgColor,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  reColor: string;
  bgColor?: string;
}) {
  const { imgSrc } = useCachedImage(src);

  return (
    <div className="grid select-none" {...props}>
      {bgColor !== undefined ? (
        <div className={`col-start-1 row-start-1 ${bgColor}`}></div>
      ) : (
        <></>
      )}
      <div
        className={cn(
          className,
          `col-start-1 row-start-1 [mix-blend-mode:var(--image-blend)]
          filter-(--image-filter)`,
        )}
      >
        <ClientOnly>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={alt}
              style={style}
              className={cn("h-full w-full object-cover")}
            />
          )}
        </ClientOnly>
      </div>
      <div
        className={cn(
          reColor,
          "col-start-1 row-start-1 [mix-blend-mode:var(--image-overlay-blend)]",
        )}
      ></div>
    </div>
  );
}

export default ThemedImg;
