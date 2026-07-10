import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import { values } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap = {
  heart: Heart,
  "book-open": BookOpen,
  users: Users,
  sparkles: Sparkles,
} as const;

export function ValuesSection() {
  return (
    <section className="py-16 md:py-20 bg-cream/50" aria-labelledby="values-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div id="values-heading">
            <SectionHeading
              label="My Core Values ♡"
              heading="My Approach to Therapy"
            />
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="group bg-card rounded-2xl border border-border p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blush/60 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
