"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { internships } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";

export function InternshipSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-cream/50" aria-labelledby="internship-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 id="internship-heading" className="text-2xl md:text-3xl mb-4">
              Clinical Internship Experience
            </h2>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blush text-rose-dark font-medium text-sm border border-rose-dark/10">
              Audiologist and Speech-Language Pathologist Intern
            </div>
          </div>

          <div className="text-center mb-8">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-foreground font-medium hover:bg-blush/20 transition-colors"
              aria-expanded={expanded}
              aria-controls="internship-list"
            >
              {expanded ? "Hide" : "View"} Clinical Internship Experience
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div
            id="internship-list"
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative pl-8 md:pl-12">
              {/* Timeline line */}
              <div
                className="absolute left-3 md:left-5 top-2 bottom-2 w-[2px] bg-primary/15"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {internships.map((intern, index) => (
                  <div key={`${intern.institution}-${intern.period}`} className="relative">
                    {/* Marker */}
                    <div
                      className="absolute -left-8 md:-left-12 top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blush/80 border-2 border-primary/25 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/60" />
                    </div>

                    {/* Card */}
                    <div className="bg-card rounded-xl border border-border p-5">
                      <h3
                        className="text-base font-semibold text-foreground mb-2"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {intern.institution}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {intern.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          {intern.period}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
