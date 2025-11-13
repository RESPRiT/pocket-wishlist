import { imgQuery } from "@/api/img";
import { useQuery } from "@tanstack/react-query";

export function useCachedImage(src: string) {
  const { data, isPending, error } = useQuery(imgQuery(src));

  return {
    imgSrc: data ?? "",
    isPending,
    error,
  };
}
