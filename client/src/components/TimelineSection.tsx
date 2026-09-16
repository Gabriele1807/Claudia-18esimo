import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Compass, Star, Heart, BookmarkCheck } from "lucide-react";

interface Milestone {
  year: string;
  phase: string;
  title: string;
  narrative: string;
  tag: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "L'Inizio",
    phase: "Atto I • La Scintilla",
    title: "Il primo sguardo e quel disordine perfetto",
    narrative:
      "Nessuno dei due immaginava che una semplice conversazione avrebbe riscritto il resto dei nostri giorni. C’era già nei tuoi occhi quella luce fiera e dolce insieme, che mi ha fatto capire all’istante che con te non sarebbe mai stato nulla di ordinario.",
    tag: "Primo Incontro",
    icon: <Sparkles className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    year: "I Primi Passi",
    phase: "Atto II • La Complicità",
    title: "Ore al telefono e risate senza respiro",
    narrative:
      "Le notti passate a parlare di tutto e di niente, dimenticandosi dell'ora, imparando a memoria i tuoi gesti, il modo in cui pronunci certe parole quando sei felice e come arricci il naso quando hai ragione tu. Ed avevi quasi sempre ragione tu.",
    tag: "Confidenze Notturne",
    icon: <Star className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    year: "I Nostri Luoghi",
    phase: "Atto III • I Viaggi e la Strada",
    title: "Fughe al tramonto e strade senza meta",
    narrative:
      "I finestrini abbassati, la nostra musica in sottofondo e la sensazione che bastasse averti sul sedile accanto per rendere qualsiasi destinazione un posto bellissimo. È con te che ho capito cosa significa sentirsi a casa ovunque.",
    tag: "Orizzonti Condivisi",
    icon: <Compass className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    year: "Le Prove Superate",
    phase: "Atto IV • Il Legame Profondo",
    title: "Proteggersi le spalle quando il mondo corre troppo",
    narrative:
      "Nei momenti difficili e negli esami della vita, ho conosciuto la tua vera tempra. Non ti ho mai vista arrenderti, e ogni volta che le cose si facevano pesanti, il nostro rifugio è stato stringerci un po’ più forte senza bisogno di spiegazioni.",
    tag: "Pietra Angolare",
    icon: <Heart className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    year: "Oggi • 18 Anni",
    phase: "Atto V • Il Traguardo",
    title: "Il giorno in cui Claudia diventa grande",
    narrative:
      "Eccoci qui. A questo numero che sa di libertà, di sogni maturi, di un futuro che aspetta solo che tu ci metta la firma. Guardarti oggi fa battere il cuore esattamente come il primo giorno, ma con la consapevolezza di quanta strada meravigliosa abbiamo già percorso insieme.",
    tag: "Maggiore Età",
    icon: <BookmarkCheck className="w-4 h-4 text-[#d4af37]" />,
  },
];

export const TimelineSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="ricordi" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Editorial Section Intro */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-3"
        >
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
          <span>La Nostra Storia</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe6] tracking-tight"
        >
          I Capitoli che ci hanno portato <span className="italic font-editorial-italic gold-gradient-text">Fin Qui</span>
        </motion.h2>

        <p className="mt-3 text-sm sm:text-base text-[#9ba3b4] max-w-lg mx-auto font-light">
          Una linea sottile fatta di sguardi, viaggi e promesse mantenute: la cronologia dorata dei nostri ricordi più preziosi.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative">
        {/* Continuous Golden Axis */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent pointer-events-none" />

        <div className="space-y-12 sm:space-y-16">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } group`}
                onMouseEnter={() => setActiveIdx(index)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#080d17] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#121926] transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0 ${
                    isEven ? "sm:pr-4 sm:text-right" : "sm:pl-4 sm:text-left"
                  }`}
                >
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0c121e]/90 border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1">
                    {/* Header meta */}
                    <div
                      className={`flex items-center gap-2 mb-2 text-xs text-[#d4af37] ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      {item.icon}
                      <span className="font-cinzel tracking-wider">{item.phase}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-[#f4efe6] mb-3 group-hover:text-[#fae8c8] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[#ded8cc] font-editorial-italic leading-relaxed">
                      {item.narrative}
                    </p>

                    <div
                      className={`mt-4 pt-3 border-t border-[#d4af37]/10 flex items-center gap-2 text-xs text-[#fae8c8]/70 ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]/70" />
                      <span className="font-sans font-medium uppercase tracking-wider text-[11px] text-[#d4af37]/90">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
