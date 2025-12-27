import { queryOptions } from "@tanstack/react-query";

const CDN_BASE = "https://s3.amazonaws.com/images.kingdomofloathing.com";

export async function fetchImg(src: string) {
  // Local paths start with "/", CDN paths are relative like "itemimages/foo.gif"
  const url = src.startsWith("./") ? src : `${CDN_BASE}/${src}`;

  const image = await fetch(url);
  if (!image.ok) throw new Error(`${image.status}`);
  const blob = await image.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject;
    reader.readAsDataURL(blob);
  });
}

export const imgQuery = (src: string) =>
  queryOptions({
    queryKey: ["img", src],
    queryFn: () => fetchImg(src),
    staleTime: Infinity,
  });
