import { experiences } from "@/data/portfolio";
import { ExperienceItem } from "./experience-item";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ExperienceTimeline() {
  return (
    <section className="pb-16 md:pb-24" aria-label="Work experience">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative pl-8 md:pl-12">
          {/* Timeline line */}
          <div
            className="absolute left-3 md:left-5 top-2 bottom-2 w-[2px] bg-primary/20"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.organization} delay={index * 0.15}>
                <ExperienceItem experience={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
