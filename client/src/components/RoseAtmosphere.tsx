import React from "react";

const ornaments = [
  { asset: "rose", side: "left", top: "8%", size: "w-32 sm:w-48", rotate: -18, delay: "0s" },
  { asset: "sprig", side: "right", top: "17%", size: "w-40 sm:w-60", rotate: 10, delay: "1.8s" },
  { asset: "rose", side: "right", top: "27%", size: "w-28 sm:w-44", rotate: 16, delay: "3.6s" },
  { asset: "sprig", side: "left", top: "37%", size: "w-40 sm:w-60", rotate: -10, delay: "1.1s" },
  { asset: "rose", side: "left", top: "47%", size: "w-28 sm:w-44", rotate: -24, delay: "5.2s" },
  { asset: "sprig", side: "right", top: "57%", size: "w-40 sm:w-60", rotate: 174, delay: "2.7s" },
  { asset: "rose", side: "right", top: "67%", size: "w-32 sm:w-48", rotate: 18, delay: "6.1s" },
  { asset: "sprig", side: "left", top: "77%", size: "w-40 sm:w-60", rotate: 166, delay: "3.9s" },
  { asset: "rose", side: "left", top: "87%", size: "w-28 sm:w-44", rotate: -12, delay: "7.3s" },
  { asset: "sprig", side: "right", top: "96%", size: "w-40 sm:w-60", rotate: 8, delay: "4.6s" },
];

export const RoseAtmosphere: React.FC = () => {
  return (
    <div className="rose-atmosphere" aria-hidden="true">
      {ornaments.map((ornament, index) => {
        const isLeft = ornament.side === "left";
        const source = ornament.asset === "rose"
          ? "/rose-petal.svg"
          : "/rose-sprig.svg";

        return (
          <img
            key={`${ornament.asset}-${index}`}
            src={source}
            alt=""
            className={`rose-ornament ${ornament.size} ${isLeft ? "rose-from-left" : "rose-from-right"}`}
            style={{ top: ornament.top, rotate: `${ornament.rotate}deg`, animationDelay: ornament.delay }}
            loading="lazy"
            decoding="async"
          />
        );
      })}
    </div>
  );
};
