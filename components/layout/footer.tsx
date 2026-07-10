"use client";

import Link from "next/link";
import { SpeechHeartIcon } from "@/components/shared/speech-heart-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Curved top edge */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="block w-full h-auto -mb-[1px]"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V40C240 10 480 0 720 10C960 20 1200 50 1440 40V80H0Z"
            fill="#F2D5D9"
          />
        </svg>
      </div>

      <div className="bg-[#F2D5D9] relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Motto */}
            <div className="flex items-center gap-3">
              <SpeechHeartIcon className="w-8 h-8 text-rose-dark" />
            </div>
            <p
              className="text-lg text-rose-dark leading-relaxed"
              style={{ fontFamily: "var(--font-handwritten)" }}
            >
              Every Voice Matters.
              <br />
              Every Progress Counts.
            </p>

            {/* Quick links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-rose-dark/80">
                {[
                  { label: "About", href: "#about" },
                  { label: "Expertise", href: "#expertise" },
                  { label: "Experience", href: "#experience" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-rose-dark transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(link.href.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-rose-dark/60">
              © {currentYear} Jusaina Nargees VP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
