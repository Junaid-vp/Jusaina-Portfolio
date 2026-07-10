interface HandwrittenLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function HandwrittenLabel({
  children,
  className = "",
}: HandwrittenLabelProps) {
  return (
    <span
      className={`inline-block text-primary text-lg md:text-xl ${className}`}
      style={{ fontFamily: "var(--font-handwritten)" }}
    >
      {children}
    </span>
  );
}
