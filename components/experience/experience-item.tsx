import { MapPin, Calendar } from "lucide-react";

interface ExperienceItemProps {
  experience: {
    role: string;
    organization: string;
    location: string;
    period: string;
    responsibilities: readonly string[];
  };
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative">
      {/* Timeline marker */}
      <div
        className="absolute -left-8 md:-left-12 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blush border-2 border-primary/40 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary" />
      </div>

      {/* Card */}
      <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3
              className="text-lg md:text-xl font-semibold text-foreground mb-1"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {experience.role}
            </h3>
            <p className="text-primary font-medium text-sm md:text-base">
              {experience.organization}
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm text-muted shrink-0">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {experience.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {experience.period}
            </span>
          </div>
        </div>

        <ul className="space-y-2" role="list">
          {experience.responsibilities.map((resp) => (
            <li key={resp} className="flex gap-2.5 text-sm text-muted leading-relaxed">
              <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
