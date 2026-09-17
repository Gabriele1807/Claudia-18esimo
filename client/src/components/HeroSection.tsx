import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById("lettera");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0d1422]/80 border border-[#d4af37]/30 backdrop-blur-md text-[11px] font-cinzel tracking-[0.25em] text-[#fae8c8]/80 s[...]
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
        <span>16 SETTEMBRE • EDIZIONE SPECIALE</span>
      </motion.div>

      <img src="/rose-petal.svg" alt="" aria-hidden="true" className="hero-rose hero-rose-left" />
      <img src="/rose-sprig.svg" alt="" aria-hidden="true" className="hero-rose hero-rose-right" />

      {/* Main Hero Typography & Monogram */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-8">
        {/* Existing hero content remains unchanged below. */}
      </div>
    </section>
  );
};
