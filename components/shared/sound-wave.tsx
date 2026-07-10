interface SoundWaveProps {
  className?: string;
}

export function SoundWave({ className = "" }: SoundWaveProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      className={`text-primary/25 ${className}`}
      aria-hidden="true"
    >
      <line x1="10" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="14" x2="20" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="8" x2="30" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="12" x2="40" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="6" x2="50" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="10" x2="60" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="4" x2="70" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="12" x2="80" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="8" x2="90" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="15" x2="100" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="18" x2="110" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
