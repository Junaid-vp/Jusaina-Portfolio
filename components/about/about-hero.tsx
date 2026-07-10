import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export function AboutHero() {
  return (
    <section className="pt-28 pb-8 md:pt-36 md:pb-12" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="About Me ♡"
            heading="My Journey, My Purpose"
            description="A dedicated Speech-Language Pathologist committed to helping individuals communicate with confidence."
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
