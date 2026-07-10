"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { heroContent } from "@/data/portfolio";
import { HandwrittenLabel } from "@/components/shared/handwritten-label";
import { SpeechHeartIcon } from "@/components/shared/speech-heart-icon";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <HandwrittenLabel className="mb-4 text-xl md:text-2xl">
              {heroContent.greeting}
            </HandwrittenLabel>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block">{heroContent.headline[0]}</span>
              <span className="block text-primary">
                {heroContent.headline[1]}
              </span>
            </h1>

            <p className="text-muted text-base md:text-lg font-medium mb-4 whitespace-pre-line">
              {heroContent.subtitle}
            </p>

            <p className="text-muted mb-8 leading-relaxed">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#expertise"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-rose-dark transition-colors duration-200"
              >
                {heroContent.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/Jusaina-Nargees-Resume.pdf"
                download="Jusaina_Nargees_Resume.pdf"
                onClick={() => toast("Downloading Resume...", {
                  icon: <Loader2 className="w-3.5 h-3.5 animate-spin" />,
                  duration: 3000
                })}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-cream hover:text-primary transition-colors duration-200"
              >
                <Download className="w-4 h-4 text-primary" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Portrait with organic frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[400px] lg:h-[500px]">
              {/* Decorative background shapes */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] bg-blush/60 rotate-3" />
              <div className="absolute -bottom-3 -right-3 w-[70%] h-[60%] rounded-full bg-sage/20" />

              {/* Portrait */}
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-white/80 shadow-lg">
                <Image
                  src="/41e8cfc4-4c20-40c0-855e-4950958ba3b7.JPG"
                  alt="Jusaina Nargees VP, Speech-Language Pathologist"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 400px"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-4"
                animate={{ y: [-2, 3, -2] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <SpeechHeartIcon className="w-10 h-10 text-primary/30" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <svg
                  viewBox="0 0 30 30"
                  className="w-8 h-8 text-peach/50"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M15 3C15 3 18 10 25 10C25 10 18 13 18 20C18 20 15 13 8 15C8 15 13 10 15 3Z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
