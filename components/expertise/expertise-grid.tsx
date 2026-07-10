"use client";

import { useState } from "react";
import {
  Search,
  ClipboardList,
  MonitorSmartphone,
  Mic,
  HeartHandshake,
  MessageCircleHeart,
  Network,
  BookHeart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { expertiseAreas } from "@/data/portfolio";
import { ExpertiseCard } from "./expertise-card";
import { AnimatedSection } from "@/components/shared/animated-section";

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  clipboard: ClipboardList,
  "monitor-smartphone": MonitorSmartphone,
  mic: Mic,
  "hand-heart": HeartHandshake,
  "message-circle-heart": MessageCircleHeart,
  network: Network,
  "book-heart": BookHeart,
};

export function ExpertiseGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleAreas = showAll ? expertiseAreas : expertiseAreas.slice(0, 4);

  return (
    <section className="pb-16 md:pb-24" aria-label="Expertise areas">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {visibleAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Search;
            return (
              <AnimatedSection key={area.title} delay={(index % 4) * 0.08}>
                <ExpertiseCard
                  title={area.title}
                  description={area.description}
                  icon={<Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />}
                />
              </AnimatedSection>
            );
          })}
        </div>

        {expertiseAreas.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-card text-foreground font-medium hover:bg-cream hover:border-primary/30 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-4 h-4 text-primary" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
