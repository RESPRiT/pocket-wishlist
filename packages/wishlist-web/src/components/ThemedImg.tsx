import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { cn } from "@/lib/utils";

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
  const [imgSrc, setImgSrc] = useState(localStorage.getItem(src));
  const { theme } = useTheme();

  useEffect(() => {
    if (imgSrc) {
      return;
    }

    const url = `https://s3.amazonaws.com/images.kingdomofloathing.com/${src}`;

    async function storeImage() {
      try {
        const image = await fetch(url);
        if (!image.ok) throw new Error(`${image.status}`);
        const blob = await image.blob();
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = () => reject;
          reader.readAsDataURL(blob);
        });

        localStorage.setItem(src, base64);
        setImgSrc(base64);
      } catch (error) {
        console.warn("Couldn't store image at", url, error);
      }
    }

    storeImage();
  }, [src, imgSrc]);

  return (
    <div className="grid select-none" {...props}>
      {bgColor !== undefined ? (
        <div className={`col-start-1 row-start-1 ${bgColor}`}></div>
      ) : (
        <></>
      )}
      <div
        className={cn(
          `${className} col-start-1 row-start-1`,
          `${theme === "dark" ? "mix-blend-lighten invert" : "mix-blend-multiply"}`,
        )}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={alt}
            style={style}
            className={cn("h-full w-full object-cover")}
          />
        ) : (
          <Skeleton className="h-full w-full" />
        )}
      </div>
      <div
        className={cn(`col-start-1 row-start-1 ${reColor} mix-blend-lighten`, {
          "mix-blend-darken": theme === "dark",
        })}
      ></div>
    </div>
  );
}

export default ThemedImg;
