import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@tanstack/react-router";
import { useCachedImage } from "@/hooks/useCachedImage";

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
  const { imgSrc } = useCachedImage(src);

  return (
    <div className="grid select-none" {...props}>
      {bgColor !== undefined ? (
        <div className={`col-start-1 row-start-1 ${bgColor}`}></div>
      ) : (
        <></>
      )}
      <div className={cn(className, "col-start-1 row-start-1")}>
        <ClientOnly>
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
        </ClientOnly>
      </div>
      <div className={cn(reColor, "col-start-1 row-start-1")}></div>
    </div>
  );
}

export default ThemedImg;
