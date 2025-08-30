import React from "react";

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
  return (
    <div className={`relative ${className}`} {...props}>
      <div
        className={`absolute z-20 inset-0 ${reColor} mix-blend-lighten flex items-center justify-center`}
      ></div>
      <img
        src={src}
        alt={alt}
        className={`absolute z-10 inset-0 w-full h-full object-cover mix-blend-multiply`}
      />
      {bgColor !== undefined ? (
        <div
          className={`absolute z-0 inset-0 ${bgColor} flex items-center justify-center`}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ThemedImg;
