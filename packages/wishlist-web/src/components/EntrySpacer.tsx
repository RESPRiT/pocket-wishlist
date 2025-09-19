function EntrySpacer({ className = "" }: { className?: string }) {
  return (
    <span
      className={`clamp-[w,1,1.5,md,lg] clamp-[h,5,6,md,lg] bg-background/65 rounded-sm ${className}`}
      aria-hidden="true"
    ></span>
  );
}

export default EntrySpacer;
