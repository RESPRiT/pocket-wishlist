function EntrySpacer({ className = "" }: { className?: string }) {
  return (
    <span
      className={`w-1 md:w-1.5 h-5 md:h-6 bg-background/65 rounded-sm ${className}`}
      aria-hidden="true"
    ></span>
  );
}

export default EntrySpacer;
