import { highlights } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function LanguageSection() {
  return (
    <section className="py-16 md:py-20 bg-cream/50" aria-label="Professional highlights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1}>
              <div className="text-center p-6 bg-card rounded-2xl border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.value}
                </p>
                <p className="text-sm text-muted">
                  {item.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
