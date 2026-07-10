import { HandwrittenLabel } from "./handwritten-label";

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  heading,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <HandwrittenLabel className="mb-3 block">{label}</HandwrittenLabel>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{heading}</h2>
      {description && (
        <p
          className={`text-muted text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
