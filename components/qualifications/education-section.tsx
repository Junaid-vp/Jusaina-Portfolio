import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function EducationSection() {
  return (
    <div>
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Education
          </h3>
        </div>
      </AnimatedSection>

      <div className="space-y-5">
        {education.map((item, index) => (
          <AnimatedSection key={item.degree} delay={index * 0.1}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4
                className="text-base font-semibold text-foreground mb-1 leading-snug"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
              >
                {item.degree}
              </h4>
              <p className="text-sm text-muted mb-2">
                {item.institution}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                Completed: {item.year}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
