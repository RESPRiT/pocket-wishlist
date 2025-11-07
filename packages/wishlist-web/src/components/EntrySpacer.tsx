function EntrySpacer({ className = "" }: { className?: string }) {
  return (
    <span
      className={`clamp-[h,5,6,md,lg] clamp-[w,1,1.5,md,lg] rounded-sm
        bg-background/65 ${className}`}
      aria-hidden="true"
    ></span>
  );
}

export default EntrySpacer;
