interface SpeechHeartIconProps {
  className?: string;
}

export function SpeechHeartIcon({ className = "w-8 h-8" }: SpeechHeartIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Speech bubble */}
      <path
        d="M8 8C8 5.79086 9.79086 4 12 4H28C30.2091 4 32 5.79086 32 8V22C32 24.2091 30.2091 26 28 26H18L12 32V26H12C9.79086 26 8 24.2091 8 22V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Heart inside */}
      <path
        d="M20 22C20 22 14 17.5 14 14C14 12.3431 15.3431 11 17 11C18.1046 11 19.0818 11.5741 19.618 12.4444L20 13L20.382 12.4444C20.9182 11.5741 21.8954 11 23 11C24.6569 11 26 12.3431 26 14C26 17.5 20 22 20 22Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
