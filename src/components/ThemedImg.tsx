import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="grid" {...props}>
      {bgColor !== undefined ? (
        <div className={`col-start-1 row-start-1 ${bgColor}`}></div>
      ) : (
        <></>
      )}
      <div className={`${className} col-start-1 row-start-1`}>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={alt}
            style={style}
            className={`w-full h-full object-cover mix-blend-multiply`}
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
      <div
        className={`col-start-1 row-start-1 ${reColor} mix-blend-lighten`}
      ></div>
    </div>
  );
}

export default ThemedImg;
