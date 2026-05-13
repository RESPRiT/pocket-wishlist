import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import animatedImages from "@/data/animatedImages.json";

const animatedSet = new Set(animatedImages);

const CDN_BASE = "https://s3.amazonaws.com/images.kingdomofloathing.com";

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

/** Static images: use pre-rendered themed PNGs served from /itemimages/{theme}/ */
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
  const pngFilename = filename.replace(/\.gif$/i, ".png");

  return (
    <div className="grid select-none">
      {bgColor && <div className={cn("col-start-1 row-start-1", bgColor)} />}
      <div className={cn("col-start-1 row-start-1", className)} {...props}>
        <img
          src={`/itemimages/${theme}/${pngFilename}`}
          alt={alt}
          style={style}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/** Animated images: mix-blend-mode approach, fetched directly from KoL CDN */
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
        <img
          src={`${CDN_BASE}/${src}`}
          alt={alt}
          style={style}
          className={cn("h-full w-full object-cover")}
        />
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
