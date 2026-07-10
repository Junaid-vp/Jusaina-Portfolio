import { ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function ExpertiseCard({ title, description, icon }: ExpertiseCardProps) {
  return (
    <div className="group bg-card rounded-2xl border border-border p-6 hover:-translate-y-1 transition-transform duration-300 h-full">
      <div className="w-12 h-12 rounded-xl bg-blush/60 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3
        className="text-base font-semibold text-foreground mb-2 leading-snug"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
