"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeechHeartIcon } from "./speech-heart-icon";

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 1.5 seconds to ensure a smooth reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <SpeechHeartIcon className="relative w-16 h-16 text-primary drop-shadow-md animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-serif text-foreground tracking-tight">
                Jusaina Nargees VP
              </h1>
              <p className="text-rose-dark font-handwritten text-lg md:text-xl">
                Preparing your experience ♡
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
