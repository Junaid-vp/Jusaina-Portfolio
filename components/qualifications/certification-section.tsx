import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function CertificationSection() {
  return (
    <div>
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Certifications & Licensure
          </h3>
        </div>
      </AnimatedSection>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <AnimatedSection key={cert.title} delay={index * 0.1}>
            <div className="bg-card rounded-2xl border border-border p-5">
              <h4
                className="text-sm font-semibold text-foreground mb-1 leading-snug"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {cert.title}
              </h4>
              <p className="text-sm text-muted">
                {cert.issuer}
              </p>
              {"membershipNumber" in cert && cert.membershipNumber && (
                <p className="text-xs text-primary mt-1.5 font-medium">
                  Member: {cert.membershipNumber}
                </p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
