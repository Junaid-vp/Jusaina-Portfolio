import Image from "next/image";
import { aboutContent } from "@/data/portfolio";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SpeechHeartIcon } from "@/components/shared/speech-heart-icon";

export function ProfessionalStory() {
  return (
    <section className="pb-16 md:pb-24" aria-label="Professional story">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story */}
          <AnimatedSection>
            <div className="space-y-5">
              {aboutContent.story.map((paragraph, index) => (
                <p key={index} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Image */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-[2rem] bg-blush/60 rotate-3" />
              <div className="absolute -bottom-3 -left-3 w-[70%] h-[60%] rounded-full bg-sage/20" />

              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden border-2 border-white/80 shadow-lg">
                {/* Fallback placeholder / Background layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush/30 to-peach/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <SpeechHeartIcon className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted/50">Therapy Space Photo</p>
                  </div>
                </div>
                
                <Image
                  src="/therapy-space-themed.png"
                  alt="Warm, supportive therapy environment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
