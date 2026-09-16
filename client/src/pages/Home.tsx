import React from "react";
import { GoldenDustCanvas } from "@/components/GoldenDustCanvas";
import { AmbientMusicPlayer } from "@/components/AmbientMusicPlayer";
import { HeroSection } from "@/components/HeroSection";
import { OpenLetterSection } from "@/components/OpenLetterSection";
import { TimelineSection } from "@/components/TimelineSection";
import { EighteenReasonsSection } from "@/components/EighteenReasonsSection";
import { F1EasterEgg } from "@/components/F1EasterEgg";
import { ClosureSection } from "@/components/ClosureSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06080d] text-[#f4efe6] overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#fff4d1]">
      {/* Background starry golden dust canvas */}
      <GoldenDustCanvas />

      {/* Persistent Ambient Sound & Audio experience */}
      <AmbientMusicPlayer />

      {/* Secret F1/Red Bull Chic Telemetry easter egg badge */}
      <F1EasterEgg />

      {/* Main Single Page Sequential Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* Elegant divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-6" />

        {/* 2. OPEN LETTER SECTION */}
        <OpenLetterSection />

        {/* Elegant divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-6" />

        {/* 3. TIMELINE SECTION */}
        <TimelineSection />

        {/* Elegant divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-6" />

        {/* 4. 18 COSE SU DI TE SECTION */}
        <EighteenReasonsSection />

        {/* Elegant divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-6" />

        {/* 5. CLOSURE SECTION (with expired birthday countdown & grand wish) */}
        <ClosureSection />
      </main>

      {/* Editorial Page Footer */}
      <footer className="relative z-10 py-10 border-t border-[#d4af37]/15 text-center text-xs text-[#9ba3b4]">
        <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-2">
          <span className="font-cinzel tracking-[0.25em] text-[#d4af37]">CLAUDIA • XVIII</span>
          <p className="font-editorial-italic text-[#fae8c8]/70">
            «Ognuno ha il suo cielo, ma il mio ha il tuo nome.»
          </p>
          <span className="text-[10px] text-[#9ba3b4]/60 tracking-wider">
            16 Settembre • Tutti i diritti riservati al nostro amore
          </span>
        </div>
      </footer>
    </div>
  );
}
