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
  {
    num: "01",
    title: "La tua risata improvvisa",
    text: "Quella spontanea, vera, che esplode all’improvviso e riempie qualsiasi stanza togliendo ogni ombra.",
    accent: "oro",
  },
  {
    num: "02",
    title: "La fierezza nei tuoi occhi",
    text: "Il modo in cui sostieni lo sguardo quando parli di ciò che ami: sei determinata, pura e irripetibile.",
    accent: "oro",
  },
  {
    num: "03",
    title: "Come mi fai sentire a casa",
    text: "Non importa dove siamo o quanto sia caotica la giornata: con te c'è una pace che non ho mai trovato altrove.",
    accent: "oro",
  },
  {
    num: "04",
    title: "La tua dolcezza nei dettagli",
    text: "Quel gesto minuscolo che noti solo tu, quel messaggio inaspettato al momento giusto che cambia il sapore di un giorno.",
    accent: "oro",
  },
  {
    num: "05",
    title: "La tua intelligenza emotiva",
    text: "Capisci le persone prima ancora che parlino, e sai sempre trovare le parole giuste con una delicatezza commovente.",
    accent: "oro",
  },
  {
    num: "06",
    title: "La passione per ciò che ti emoziona",
    text: "Che sia una canzone, un viaggio sognato o un’idea brillante, veder brillare i tuoi occhi quando parli è uno spettacolo.",
    accent: "oro",
  },
  {
    num: "07",
    title: "Il modo in cui proteggi chi ami",
    text: "La lealtà incrollabile verso la tua famiglia, le persone care e me: sei una roccia salda e leale come poche.",
    accent: "oro",
  },
  {
    num: "08",
    title: "I nostri silenzi perfetti",
    text: "Quando non serve dire nulla: un viaggio in auto al crepuscolo, le mani intrecciate e un'intesa che supera le parole.",
    accent: "oro",
  },
  {
    num: "09",
    title: "La tua eleganza naturale",
    text: "In un vestito da sera o in felpa a casa: hai un portamento innato, raffinato e discreto che ti rende unica.",
    accent: "oro",
  },
  {
    num: "10",
    title: "La tua grinta nelle sfide",
    text: "Quando incontri un ostacolo non arretri: raccogli il fiato, alzi la testa e dimostri quanto vali con dignità.",
    accent: "oro",
  },
  {
    num: "11",
    title: "Come rendi speciali i giorni normali",
    text: "Una colazione improvvisata, una battuta sussurrata, una camminata senza fretta: con te l’ordinario diventa memorabile.",
    accent: "oro",
  },
  {
    num: "12",
    title: "La tua ironia tagliente",
    text: "Quella battuta intelligente e sottile al momento esatto con cui sai spiazzarmi e farmi sorridere da solo per ore.",
    accent: "oro",
  },
  {
    num: "13",
    title: "Il tuo profumo che resta sui miei vestiti",
    text: "Quell’odore inconfondibile che continua a parlarmi di te anche quando sei lontana e mi fa sentire vicino.",
    accent: "oro",
  },
  {
    num: "14",
    title: "La cura con cui ascolti",
    text: "Non ascolti mai per semplice cortesia: ti importa davvero, senti ciò che provo e sai sempre come curarmi.",
    accent: "oro",
  },
  {
    num: "15",
    title: "La tua complicità senza filtri",
    text: "Sapere di poterti dire ogni singolo pensiero senza mai sentirmi giudicato, perché noi due siamo una squadra.",
    accent: "oro",
  },
  {
    num: "16",
    title: "Il tuo coraggio di sognare in grande",
    text: "Non ti accontenti delle strade comode: hai orizzonti ampi e non vedi l'ora di conquistare il mondo, un passo alla volta.",
    accent: "oro",
  },
  {
    num: "17",
    title: "La donna straordinaria che sei diventata",
    text: "Aver avuto l’onore di vederti crescere e diventare questa ragazza forte, consapevole, luminosa e indipendente.",
    accent: "oro",
  },
  {
    num: "18",
    title: "Perché sei tu: semplicemente Claudia",
    text: "Perché non esiste al mondo un’altra come te. E scegliere te ogni singolo giorno è la decisione più bella e naturale della mia vita.",
    accent: "speciale",
  },
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
