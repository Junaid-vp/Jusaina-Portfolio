"use client";

import { therapySteps } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function TherapyProcess() {
  return (
    <section className="py-16 md:py-24 bg-cream/50" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 id="process-heading" className="mb-4">
              My Approach to Meaningful Progress
            </h2>
            <p className="text-muted text-lg mx-auto max-w-2xl">
              A thoughtful, step-by-step process centered on understanding each individual&apos;s unique needs.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-primary/20" aria-hidden="true" />

            <div className="grid grid-cols-5 gap-4">
              {therapySteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.12}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-24 h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-4">
                      <span className="text-xs text-primary/60 absolute top-2">{step.number}</span>
                      <span className="text-base font-semibold text-foreground mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-primary/20" aria-hidden="true" />

            <div className="space-y-6">
              {therapySteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className="relative z-10 -ml-8 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/40 shrink-0" />
                    <div className="bg-card rounded-xl border border-border p-4 flex-1">
                      <span className="text-xs text-primary/60 block mb-1">{step.number}</span>
                      <span className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
