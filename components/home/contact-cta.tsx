import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SpeechHeartIcon } from "@/components/shared/speech-heart-icon";
import { SoundWave } from "@/components/shared/sound-wave";

export function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-cream/50" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12 text-center max-w-3xl mx-auto overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 right-4 opacity-40">
              <SoundWave className="w-24 h-8" />
            </div>

            <SpeechHeartIcon className="w-12 h-12 text-primary mx-auto mb-6" />

            <h2 id="cta-heading" className="mb-4">
              Let&apos;s Connect
            </h2>

            <p className="text-muted mb-8 mx-auto">
              Whether you are a parent, educator, healthcare professional, or
              recruiter, I would be happy to connect and explore how we can work
              together to support better communication.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-rose-dark transition-colors duration-200"
            >
              Get in Touch ♡
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
