interface FloralDecorationProps {
  variant?: "top-right" | "bottom-left" | "inline";
  className?: string;
}

export function FloralDecoration({
  variant = "inline",
  className = "",
}: FloralDecorationProps) {
  if (variant === "top-right") {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className={`text-primary/15 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M60 20C60 20 70 35 85 35C85 35 70 40 70 55C70 55 60 40 45 45C45 45 55 35 60 20Z"
          fill="currentColor"
        />
        <path
          d="M80 50C80 50 90 60 100 55C100 55 92 65 95 75C95 75 85 68 75 72C75 72 80 62 80 50Z"
          fill="currentColor"
          opacity="0.7"
        />
        <circle cx="62" cy="42" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "bottom-left") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className={`text-peach/30 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M40 80C40 80 30 65 15 65C15 65 30 60 30 45C30 45 40 60 55 55C55 55 45 65 40 80Z"
          fill="currentColor"
        />
        <circle cx="38" cy="58" r="2.5" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 60 30"
      fill="none"
      className={`text-primary/20 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 25C10 25 15 10 30 10C45 10 50 25 50 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="30" cy="8" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
