import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Gauge, Trophy, X, ChevronRight, Zap } from "lucide-react";

export const F1EasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Discreet floating / corner badge in the bottom-left */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#070b14]/90 border border-[#d4af37]/30 hover:border-[#ea1d2d]/70 shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300"
          aria-label="Apri dettaglio speciale F1"
        >
          {/* Miniature subtle Red Bull style colored stripe */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-3 rounded-xs bg-[#061126] border border-[#d4af37]/40" />
            <span className="w-1.5 h-3 rounded-xs bg-[#ea1d2d]" />
            <span className="w-1.5 h-3 rounded-xs bg-[#f8be00]" />
          </div>

          <span className="text-[11px] font-cinzel tracking-wider text-[#fae8c8]/80 group-hover:text-[#ffffff] transition-colors">
            LAP 18 • PIT WALL
          </span>
          <span className="w-2 h-2 rounded-full bg-[#ea1d2d] animate-ping opacity-75" />
        </motion.button>
      </div>

      {/* Chic Telemetry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-[#090e18] border border-[#d4af37]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.15)] overflow-hidden text-left"
            >
              {/* Header with Red Bull racing livery accents: dark navy, crimson, yellow & gold */}
              <div className="relative px-6 py-5 bg-[#050912] border-b border-[#d4af37]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0e1626] border border-[#d4af37]/30 flex items-center justify-center text-[#f8be00]">
                    <Flag className="w-4 h-4 text-[#ea1d2d]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#ea1d2d] font-bold">
                        Radio Team • Confidential
                      </span>
                    </div>
                    <h4 className="text-base font-serif-luxury font-medium text-[#f4efe6]">
                      Telemetria Claudia • GP Dei 18 Anni
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-[#9ba3b4] hover:text-[#f4efe6] hover:bg-[#151f33] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 space-y-6">
                {/* Driver message card */}
                <div className="p-4 rounded-xl bg-[#0d1424] border border-[#d4af37]/25 relative">
                  <span className="text-[10px] font-cinzel uppercase tracking-wider text-[#f8be00]">
                    BOX MESSAGE • INGEGNERE DI PISTA:
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-editorial-italic text-[#fae8c8] leading-relaxed">
                    «Claudia, sono 18 giri condotti con passo straordinario e zero errori. Hai affrontato curve strette a testa alta e hai sempre trovato il punto di corda perfetto. Il semaforo della maggiore età è verde: adesso hai pista libera, gas spalancato e io sono qui al tuo muretto a fare il tifo per ogni tuo trionfo.»
                  </p>
                </div>

                {/* Telemetry Stats Grid */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#070b13] border border-[#d4af37]/15">
                    <span className="block text-[10px] uppercase tracking-wider text-[#9ba3b4]">
                      Giro Attuale
                    </span>
                    <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#d4af37]">
                      18 / ∞
                    </span>
                    <span className="text-[10px] text-[#fae8c8]/60">Giro Veloce</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#070b13] border border-[#d4af37]/15">
                    <span className="block text-[10px] uppercase tracking-wider text-[#9ba3b4]">
                      Complicità
                    </span>
                    <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#ea1d2d]">
                      P1
                    </span>
                    <span className="text-[10px] text-[#fae8c8]/60">Sempre in testa</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#070b13] border border-[#d4af37]/15">
                    <span className="block text-[10px] uppercase tracking-wider text-[#9ba3b4]">
                      Futuro
                    </span>
                    <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#f8be00]">
                      FULL SPEED
                    </span>
                    <span className="text-[10px] text-[#fae8c8]/60">DRS Attivo</span>
                  </div>
                </div>

                {/* Closing quote */}
                <div className="text-center pt-2">
                  <p className="text-xs text-[#9ba3b4] font-editorial-italic">
                    Un piccolo tributo per ricordarti che la nostra storia va veloce, forte e non si ferma mai.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[#050810] border-t border-[#d4af37]/15 flex items-center justify-between">
                <span className="text-[11px] text-[#9ba3b4]">Designed with love for Claudia</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-full text-xs font-cinzel tracking-wider text-[#06080d] bg-[#d4af37] hover:bg-[#fae8c8] transition-colors"
                >
                  CHIUDI PIT WALL
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
