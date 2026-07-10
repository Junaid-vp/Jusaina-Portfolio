import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExperiencePreview() {
  const latest = experiences[0];

  return (
    <section className="py-16 md:py-24 bg-cream/50" aria-labelledby="experience-preview-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="My Experience ♡"
          heading="Professional Journey"
        />

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 max-w-3xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3
                  className="text-xl font-semibold text-foreground mb-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {latest.role}
                </h3>
                <p className="text-primary font-medium">
                  {latest.organization}
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-sm text-muted shrink-0">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {latest.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {latest.period}
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              {latest.responsibilities.slice(0, 3).map((resp) => (
                <li key={resp} className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-rose-dark transition-colors"
          >
            View Full Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
