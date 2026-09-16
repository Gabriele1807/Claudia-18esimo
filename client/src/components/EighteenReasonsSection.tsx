import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Eye, Flame, Compass, Coffee, Sun, Music, Shield, BookOpen, Smile, Zap } from "lucide-react";

interface Reason {
  num: string;
  title: string;
  text: string;
  accent: string;
}

const reasons: Reason[] = [
  { num: "01", title: "La forza che hai, anche quando non la vedi", text: "Una forza che esiste anche nei momenti in cui fai fatica a riconoscerla.", accent: "oro" },
  { num: "02", title: "Il tuo modo di fare", text: "Quel modo tutto tuo di stare nelle cose e di renderle riconoscibili.", accent: "oro" },
  { num: "03", title: "La tua bellezza interiore ed esteriore", text: "Una bellezza che si vede e che si sente, dentro e fuori.", accent: "oro" },
  { num: "04", title: "L'importanza che dai anche alle piccole cose", text: "La cura con cui sai dare valore anche a ciò che sembra più semplice.", accent: "oro" },
  { num: "05", title: "La tranquillità che sento quando ci sei", text: "La serenità che arriva semplicemente quando sei accanto a me.", accent: "oro" },
  { num: "06", title: "La determinazione con cui insegui ciò che desideri", text: "La decisione con cui continui a guardare verso ciò che vuoi davvero.", accent: "oro" },
  { num: "07", title: "Il tuo modo di ragionare simile al mio", text: "Quel modo di pensare che spesso ci fa ritrovare sulla stessa lunghezza d'onda.", accent: "oro" },
  { num: "08", title: "Ogni ricordo che abbiamo già costruito", text: "Tutto ciò che abbiamo vissuto e che continua a far parte della nostra storia.", accent: "oro" },
  { num: "09", title: "Il modo in cui sogniamo un futuro insieme", text: "La bellezza dei desideri che immaginiamo guardando nella stessa direzione.", accent: "oro" },
  { num: "10", title: "Le tue piccole manie, ormai anche un po' mie", text: "Mia piccola ludopatica.", accent: "oro" },
  { num: "11", title: "Il tuo modo di farmi sentire ascoltato e capito", text: "La sensazione preziosa di poter parlare sapendo di essere davvero ascoltato.", accent: "oro" },
  { num: "12", title: "La tua sensibilità, profonda e rara", text: "Una sensibilità che rende il tuo modo di sentire unico e speciale.", accent: "oro" },
  { num: "13", title: "La tua unicità nel mangiare le cose", text: "Anche il modo in cui mangi ha qualcosa di inconfondibilmente tuo.", accent: "oro" },
  { num: "14", title: "Il tuo dolce sguardo", text: "In mezzo al silenzio, vale più di miliardi di parole.", accent: "oro" },
  { num: "15", title: "L'affetto che mi dai anche nel silenzio", text: "Una presenza che sa farsi sentire anche senza bisogno di parole.", accent: "oro" },
  { num: "16", title: "Il modo in cui rendi speciali anche le cose più normali", text: "La capacità di dare qualcosa in più anche ai momenti più semplici.", accent: "oro" },
  { num: "17", title: "La tua vocina", text: "Una voce che ascolterei per tutti i giorni della mia vita.", accent: "oro" },
  { num: "18", title: "Perché sei Claudia. E questo basta", text: "Non serve aggiungere altro: essere Claudia è già tutto.", accent: "speciale" },
];

export const EighteenReasonsSection: React.FC = () => {
  const [selectedNum, setSelectedNum] = useState<string | null>(null);

  return (
    <section id="motivi" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3"
        >
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
          <span>Diciotto Frammenti d’Amore</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe6] tracking-tight"
        >
          18 Cose che Riconosco <span className="italic font-editorial-italic gold-gradient-text">In Te</span>
        </motion.h2>

        <p className="mt-3 text-sm sm:text-base text-[#9ba3b4] max-w-lg mx-auto font-light">
          Uno per ogni anno di vita: diciotto motivi per cui sei la persona che ho scelto, che scelgo e che amerò sempre.
        </p>
      </div>

      {/* Editorial Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {reasons.map((item, idx) => {
          const isFinal = item.accent === "speciale";
          const isSelected = selectedNum === item.num;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.08 }}
              onClick={() => setSelectedNum(isSelected ? null : item.num)}
              className={`cursor-pointer group relative p-6 sm:p-7 rounded-2xl transition-all duration-500 overflow-hidden ${
                isFinal
                  ? "md:col-span-2 bg-gradient-to-r from-[#141b2b] via-[#101725] to-[#141b2b] border-2 border-[#d4af37]/60 shadow-[0_15px_40px_rgba(212,175,55,0.15)]"
                  : "bg-[#0b1019]/90 border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-sm"
              }`}
            >
              {/* Gold gradient top border accent on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#d4af37]/70 group-hover:text-[#f8be00] transition-colors shrink-0">
                  {item.num}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-serif-luxury font-medium text-[#f4efe6] group-hover:text-[#fae8c8] transition-colors">
                      {item.title}
                    </h3>
                    {isFinal && (
                      <span className="shrink-0 text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37] px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30">
                        La Nostra Promessa
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-base sm:text-lg text-[#ded8cc] font-editorial-italic leading-relaxed group-hover:text-[#fae8c8] transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
