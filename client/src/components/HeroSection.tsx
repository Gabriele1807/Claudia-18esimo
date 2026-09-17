import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById("lettera");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12 overflow-hidden">
      {/* Top micro bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0d1422]/80 border border-[#d4af37]/30 backdrop-blur-md text-[11px] font-cinzel tracking-[0.25em] text-[#fae8c8]/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
        <span>16 SETTEMBRE • EDIZIONE SPECIALE</span>
      </motion.div>

      <img
        src="/roses/claudia-red-rose.svg"
        alt=""
        aria-hidden="true"
        className="hero-rose hero-rose-left"
      />
      <img
        src="/roses/claudia-rose-sprig.svg"
        alt=""
        aria-hidden="true"
        className="hero-rose hero-rose-right"
      />

      {/* Main Hero Typography & Monogram */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-8">
        {/* Subtle background golden aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] bg-[#d4af37]/10 blur-[110px] rounded-full pointer-events-none" />

        {/* Big Roman / Editorial 18 Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-3"
        >
          <span className="font-cinzel text-[110px] sm:text-[180px] md:text-[220px] font-extrabold leading-none tracking-tight block gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
            18
          </span>
          <span className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-cinzel tracking-[0.5em] text-[#fae8c8]/60 uppercase whitespace-nowrap">
            Claudia
          </span>
        </motion.div>

        {/* Editorial Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe6] tracking-tight max-w-2xl mx-auto"
        >
          Il giorno in cui Claudia è{" "}
          <span className="italic font-editorial-italic gold-gradient-text">diventata grande</span>
        </motion.h1>

        {/* Narrative poetic premise */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-5 text-sm sm:text-lg text-[#9ba3b4] font-editorial-italic max-w-xl mx-auto leading-relaxed"
        >
          Un traguardo prezioso che segna l'inizio del tuo capitolo più bello. Questa pagina è una dedica senza tempo, creata solo per te.
        </motion.p>
      </div>

      {/* Discover Button & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex flex-col items-center gap-3 z-10"
      >
        <button
          onClick={scrollToContent}
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-[#0a0f18]/90 border border-[#d4af37]/40 text-[#fae8c8] hover:border-[#d4af37] hover:bg-[#101726] shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300"
        >
          <span className="text-xs font-cinzel tracking-[0.2em]">SCOPRI LA TUA DEDICA</span>
          <ChevronDown className="w-4 h-4 text-[#d4af37] group-hover:translate-y-0.5 transition-transform" />
        </button>

        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9ba3b4]/60">
          Scorri verso il basso
        </span>
      </motion.div>
    </section>
  );
};
