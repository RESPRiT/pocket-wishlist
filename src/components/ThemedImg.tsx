import React, { useEffect, useState } from "react";

function ThemedImg({
  className,
  src,
  alt,
  reColor,
  bgColor,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  className: string;
  src: string;
  alt: string;
  reColor: string;
  bgColor?: string;
}) {
  const [imgSrc, setImgSrc] = useState("placeholder");
  const url = `https://s3.amazonaws.com/images.kingdomofloathing.com/${src}`;

  useEffect(() => {
    const cached = localStorage.getItem(src);
    if (cached) {
      setImgSrc(cached);
      return;
    }

    async function storeImage() {
      try {
        const image = await fetch(url);
        const blob = await image.blob();
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });

        localStorage.setItem(src, base64);
        setImgSrc(base64);
      } catch (error) {
        console.warn("Couldn't store image", url, error);
      }
    }

    storeImage();
  }, [src, url]);

  return (
    <div className="grid" {...props}>
      {bgColor !== undefined ? (
        <div className={`col-start-1 row-start-1 ${bgColor}`}></div>
      ) : (
        <></>
      )}
      <div className={`${className} col-start-1 row-start-1`}>
        <img
          src={imgSrc}
          alt={alt}
          className={`w-full h-full object-cover mix-blend-multiply`}
        />
      </div>
      <div
        className={`col-start-1 row-start-1 ${reColor} mix-blend-lighten`}
      ></div>
    </div>
  );
}

export default ThemedImg;
