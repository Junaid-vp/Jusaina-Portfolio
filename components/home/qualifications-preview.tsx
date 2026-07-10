import Link from "next/link";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

export function QualificationsPreview() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="quals-preview-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Qualifications ♡"
          heading="Education & Credentials"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Education
                </h3>
              </div>
              <p className="text-foreground font-medium text-sm">
                {education[0].degree}
              </p>
              <p className="text-sm text-muted mt-1">
                {education[0].institution} — {education[0].year}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Key Certification
                </h3>
              </div>
              <p className="text-foreground font-medium text-sm">
                {certifications[0].title}
              </p>
              <p className="text-sm text-muted mt-1">
                {certifications[0].issuer}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center">
          <Link
            href="/qualifications"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-rose-dark transition-colors"
          >
            View All Qualifications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
