import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ChevronDown } from "lucide-react";

export const OpenLetterSection: React.FC = () => {
  // Let the letter be open by default or easily expandable, offering both states elegantly
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="lettera" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3"
        >
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
          <span>Parole Custodite Nel Tempo</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe6] tracking-tight"
        >
          Una Lettera per Te, <span className="italic font-editorial-italic font-normal gold-gradient-text">Claudia</span>
        </motion.h2>
        <p className="mt-3 text-sm sm:text-base text-[#9ba3b4] max-w-md mx-auto font-light">
          Non un semplice biglietto d’auguri, ma una promessa scritta nel momento in cui il tuo mondo si spalanca.
        </p>
      </div>

      {/* Sealed Invitation / Envelope Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div
          className={`group relative overflow-hidden rounded-2xl transition-all duration-700 bg-[#0b0f17]/95 border ${
            isOpen ? "border-[#d4af37]/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15)]" : "border-[#d4af37]/25"
          }`}
        >
          {/* Subtle gold filigree lines along edges */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

          {/* Invitation Cover Header / Seal */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer select-none hover:bg-[#0f1522]/50 transition-colors"
          >
            {/* Wax Seal with Roman "XVIII" */}
            <div className="relative mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#c8992a] via-[#916b14] to-[#5a4209] p-[2px] shadow-[0_4px_25px_rgba(212,175,55,0.35)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-[#181105] flex flex-col items-center justify-center border border-[#e5c365]/30">
                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#f8be00] tracking-wider">
                    XVIII
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#fae8c8]/70 -mt-0.5">
                    Claudia
                  </span>
                </div>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#e5c365] animate-pulse" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#fae8c8]/60 mb-1">
              Edizione Riservata • 18 Anni
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#f4efe6]">
              {isOpen ? "Lettera a Claudia nel suo 18° Compleanno" : "Tocca per dissigillare la lettera"}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-xs text-[#d4af37] font-medium">
              <span>{isOpen ? "Richiudi lettera" : "Apri e leggi ogni parola"}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          {/* Letter Body - Smooth Editorial Paper */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-[#d4af37]/20"
              >
                <div className="p-6 sm:p-12 md:p-14 bg-[#080c14]/95 relative">
                  {/* Watermark in background */}
                  <div className="absolute right-4 bottom-4 opacity-5 font-cinzel text-7xl sm:text-9xl pointer-events-none select-none text-[#d4af37]">
                    18
                  </div>

                  {/* Letter Header info */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-5 border-b border-[#d4af37]/15 text-xs text-[#9ba3b4] mb-8 gap-2">
                    <span className="font-cinzel tracking-wider text-[#d4af37]">16 SETTEMBRE • DICIOTTESIMO COMPLEANNO</span>
                    <span className="italic font-editorial-italic text-sm text-[#fae8c8]/90">A te, che sei l’inizio di ogni mia cosa bella</span>
                  </div>

                  {/* Body paragraphs in refined Cormorant / Playfair font */}
                  <div className="space-y-6 text-[#ded8cc] font-editorial-italic text-lg sm:text-xl leading-relaxed sm:leading-loose">
                    <p className="first-letter:text-5xl first-letter:font-serif-luxury first-letter:text-[#d4af37] first-letter:mr-2.5 first-letter:float-left first-letter:leading-none">
                      Amore mio,
                    </p>

                    <p>
                      C’è qualcosa di solenne e allo stesso tempo incredibilmente leggero nell’arrivare a questo giorno. Diciotto anni non sono soltanto una cifra stampata sui documenti o il rito di passaggio che tutti aspettano. Per me, questo traguardo è la conferma di ciò che ho sempre saputo dal primo istante in cui ti ho guardata: sei una persona rara, con una grazia che non appartiene al rumore del mondo e una forza silenziosa che continua a togliermi il fiato.
                    </p>

                    <p>
                      Ti ho vista ridere fino alle lacrime, ti ho vista proteggere le cose in cui credi con una determinazione incrollabile, e ti ho vista trasformare giornate ordinarie in ricordi che ora custodisco come i pezzi più preziosi della mia vita. Diventare grande non cambierà quell’anima pura e luminosa con cui accogli ogni cosa; servirà soltanto a dare a quella luce uno spazio ancora più vasto in cui brillare.
                    </p>

                    <p>
                      Non so esattamente dove ti porterà il futuro, quali strade deciderai di percorrere o quali sogni diventeranno realtà per primi. Ma so con assoluta certezza che, in ogni curva, in ogni accelerazione, nei giorni di festa e nei silenzi in cui basterà stringersi la mano, io sarò lì: al tuo fianco, orgoglioso di te prima ancora di qualsiasi traguardo, innamorato di te più di ieri e meno di domani.
                    </p>

                    <p>
                      Goditi ogni singolo respiro di questo nuovo inizio, Claudia. Il mondo là fuori è grande, ma tu hai già tutto ciò che serve per renderlo straordinario.
                    </p>
                  </div>

                  {/* Signature block */}
                  <div className="mt-10 pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#9ba3b4]">Con tutto l’amore del mondo,</p>
                      <p className="font-serif-luxury text-2xl sm:text-3xl italic text-[#f4efe6] mt-1">Per sempre tuo</p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs text-[#d4af37]/90 bg-[#121824] px-4 py-2 rounded-full border border-[#d4af37]/30">
                      <Heart className="w-3.5 h-3.5 fill-[#ea1d2d] text-[#ea1d2d]" />
                      <span>18 Anni d'Amore e Vita</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
