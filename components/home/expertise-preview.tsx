import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertiseAreas } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExpertisePreview() {
  const preview = expertiseAreas.slice(0, 4);

  return (
    <section className="py-16 md:py-24" aria-labelledby="expertise-preview-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="What I Do ♡"
          heading="Areas of Expertise"
          description="Providing comprehensive assessment and personalized support to help individuals communicate, connect, and thrive."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {preview.map((area, index) => (
            <AnimatedSection key={area.title} delay={index * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {area.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {area.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-rose-dark transition-colors"
          >
            View All Expertise Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
