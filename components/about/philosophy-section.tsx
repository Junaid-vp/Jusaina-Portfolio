import { aboutContent } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24" aria-label="Philosophy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {/* Quotation mark */}
            <svg
              viewBox="0 0 40 30"
              className="w-10 h-8 text-primary/30 mx-auto mb-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 18.75V30h11.25V18.75H5.625C5.625 12.1875 10.3125 6.5625 16.875 5.625V0C7.5 1.125 0 9.375 0 18.75ZM22.5 0v5.625C29.0625 6.5625 33.75 12.1875 33.75 18.75H28.125V30H39.375V18.75C39.375 9.375 31.875 1.125 22.5 0Z" />
            </svg>

            <blockquote>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic" style={{ fontFamily: "var(--font-serif)" }}>
                {aboutContent.quote}
              </p>
            </blockquote>

            {/* Decorative line */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="block w-12 h-[1px] bg-primary/30" />
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 text-primary/40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 8 4.5 3.5 3.5 0 0 1 13.5 7C13.5 10.5 8 14 8 14z" />
              </svg>
              <span className="block w-12 h-[1px] bg-primary/30" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
