import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Clock, CheckCircle2, Share2, Award } from "lucide-react";
import { toast } from "sonner";

const confettiPieces = Array.from({ length: 28 }, (_, index) => ({
  side: index % 2 === 0 ? "left" : "right",
  y: 20 + ((index * 17) % 62),
  drift: 90 + ((index * 29) % 150),
  rotate: 180 + ((index * 47) % 280),
  delay: (index % 7) * 0.045,
  color: ["#d4af37", "#fae8c8", "#e5c365", "#ea1d2d", "#244f9b"][index % 5],
}));

export const ClosureSection: React.FC = () => {
  const [showGrandModal, setShowGrandModal] = useState(false);
  const [countdown, setCountdown] = useState(99);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);
  const countdownStartedRef = useRef(false);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const startCountdown = () => {
    if (countdownStartedRef.current || showBirthdayWish) return;
    countdownStartedRef.current = true;
    setIsCountdownActive(true);
    let remaining = 99;
    intervalRef.current = window.setInterval(() => {
      remaining -= 1;
      setCountdown(remaining);
      if (remaining <= 0) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        setShowBirthdayWish(true);
      }
    }, 18);
  };

  const handleCelebrate = () => {
    setShowGrandModal(true);
    toast.success("Buon 18° Compleanno, Claudia! Che ogni tuo desiderio prenda forma.", {
      style: {
        background: "#0c121e",
        color: "#fae8c8",
        border: "1px solid rgba(212, 175, 55, 0.4)",
      },
      duration: 5000,
    });
  };

  return (
    <section id="chiusura" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {/* Radiant Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#d4af37]/10 blur-[130px] rounded-full pointer-events-none" />

      <AnimatePresence>
        {showBirthdayWish && (
          <div className="fixed inset-0 z-[60] overflow-hidden pointer-events-none" aria-hidden="true">
            {confettiPieces.map((piece, index) => {
              const fromLeft = piece.side === "left";
              return (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    x: fromLeft ? -36 : 36,
                    rotate: 0,
                    scale: 0.65,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: fromLeft ? piece.drift : -piece.drift,
                    rotate: piece.rotate,
                    scale: [0.65, 1, 0.9],
                  }}
                  transition={{ duration: 1.7, delay: piece.delay, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute block h-2 w-1.5 rounded-[1px] shadow-[0_0_10px_currentColor]"
                  style={{
                    [fromLeft ? "left" : "right"]: "-0.35rem",
                    top: `${piece.y}%`,
                    width: index % 3 === 0 ? "0.5rem" : "0.35rem",
                    height: index % 3 === 0 ? "0.8rem" : "0.6rem",
                    backgroundColor: piece.color,
                    color: piece.color,
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Decorative roman crown / monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-tr from-[#131b2c] to-[#080d16] border border-[#d4af37]/40 flex items-center justify-center mb-8 shadow-[0_0_35px_rgba(212,175,55,0.25)]"
      >
        <span className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
          18
        </span>
      </motion.div>

      {/* Deep Romantic Closing Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37]">
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
          <span>Il Traguardo &amp; L'Orizzonte</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-[#f4efe6] tracking-tight">
          Il tuo momento è <span className="italic font-editorial-italic gold-gradient-text">Adesso</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-editorial-italic text-[#d0c8b8] leading-relaxed">
          Compiere diciotto anni significa avere finalmente tra le mani le chiavi del proprio destino. Ma per noi due significa anche un’altra cosa: aver costruito una roccia così solida che qualsiasi tempesta o novità affronterai, saprai sempre dove trovare la tua terraferma.
        </p>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#9ba3b4] font-light">
          Grazie per aver reso questi anni indimenticabili. E grazie perché so che il meglio deve ancora cominciare.
        </p>
      </motion.div>

      {/* Countdown Card (Already Complete / Exact Moment of Birth) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={startCountdown}
        transition={showBirthdayWish ? { duration: 0.85, ease: "easeOut" } : { duration: 0.8, delay: 0.2 }}
        animate={showBirthdayWish ? { scale: [1, 1.035, 0.985, 1.02, 1], x: [0, -8, 8, -5, 0], rotate: [0, -1, 1, -0.6, 0] } : undefined}
        className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f1624]/90 to-[#090d16]/95 border border-[#d4af37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] max-w-xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 text-xs text-[#fae8c8] uppercase tracking-widest font-cinzel mb-4">
          <Clock className="w-4 h-4 text-[#d4af37]" />
          <span>Conto alla rovescia terminato • Ora esatta di nascita</span>
        </div>

        {/* Expired Countdown Timer Displays 00:00:00:00 with Gold celebration aura */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 my-4">
          <div className="p-3 sm:p-4 rounded-xl bg-[#060910] border border-[#d4af37]/20">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#d4af37]">00</span>
            <span className="text-[10px] sm:text-xs text-[#9ba3b4] uppercase tracking-wider">Giorni</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#060910] border border-[#d4af37]/20">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#d4af37]">00</span>
            <span className="text-[10px] sm:text-xs text-[#9ba3b4] uppercase tracking-wider">Ore</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#060910] border border-[#d4af37]/20">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#d4af37]">00</span>
            <span className="text-[10px] sm:text-xs text-[#9ba3b4] uppercase tracking-wider">Minuti</span>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#060910] border border-[#d4af37]/20">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#ea1d2d]">{String(countdown).padStart(2, "0")}</span>
            <span className="text-[10px] sm:text-xs text-[#9ba3b4] uppercase tracking-wider">Secondi</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showBirthdayWish ? (
            <motion.div
              key="birthday-wish"
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/55 text-xs text-[#fff3cf] shadow-[0_0_28px_rgba(212,175,55,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f8be00] animate-pulse" />
              <span>Buon compleanno, Claudia: benvenuta nel tuo futuro.</span>
              <Heart className="w-3.5 h-3.5 fill-[#ea1d2d] text-[#ea1d2d]" />
            </motion.div>
          ) : (
            <motion.div
              key="countdown-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162238] border border-[#d4af37]/30 text-xs text-[#fae8c8]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{isCountdownActive ? "Il momento sta arrivando…" : "Scorri qui: il momento sta per arrivare"}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Grand Final Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12"
      >
        <button
          onClick={handleCelebrate}
          className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fae8c8] to-[#d4af37] text-[#06080d] font-cinzel font-bold text-sm sm:text-base tracking-[0.2em] shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-[#06080d]" />
          <span>BUON COMPLEANNO, CLAUDIA</span>
          <Heart className="w-5 h-5 fill-[#ea1d2d] text-[#ea1d2d]" />
        </button>

        <p className="mt-6 text-xs text-[#9ba3b4] font-editorial-italic">
          Realizzato con amore eterno • 16 Settembre
        </p>
      </motion.div>

      {/* Modal celebration card */}
      <AnimatePresence>
        {showGrandModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#0b101b] border-2 border-[#d4af37]/60 shadow-[0_20px_70px_rgba(212,175,55,0.25)] text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#141d2e] border border-[#d4af37] flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 fill-[#ea1d2d] text-[#ea1d2d] animate-bounce" />
              </div>

              <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#d4af37]">
                Il Nostro Patto
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#f4efe6] mt-2 mb-4">
                Auguri alla donna più speciale del mondo
              </h3>

              <p className="text-sm sm:text-base font-editorial-italic text-[#fae8c8] leading-relaxed mb-6">
                «Che la tua vita sia sempre all’altezza dei tuoi sogni più audaci, e che ogni risata condivisa con me ti ricordi quanto sei amata.»
              </p>

              <button
                onClick={() => setShowGrandModal(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e5c365] text-[#06080d] font-cinzel font-semibold text-xs tracking-widest hover:brightness-110 transition-all"
              >
                CUSTODISCI QUESTO RICORDO
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
