"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { img: "https://varthamaanyoga.com/wp-content/uploads/2025/06/Untitled-design-27-945x1024.jpg", label: "Ashtanga Vinyasa / Hatha" },
  { img: "https://varthamaanyoga.com/wp-content/uploads/2025/05/Untitled-design-4-945x1024.jpg", label: "Aerial Yoga" },
  { img: "https://varthamaanyoga.com/wp-content/uploads/2025/06/yin-yoga-ttc-50-hour-teacher-training-course-945x1024.png", label: "Yin Yoga" },
  { img: "https://varthamaanyoga.com/wp-content/uploads/2025/06/pregnancy-yoga-teacher-training-3-945x1024.png", label: "Pregnancy Yoga" },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (hover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5200);
    return () => clearInterval(id);
  }, [hover]);

  return (
    <div className="relative mx-auto w-full max-w-md" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {/* breathing rings + orbit */}
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-flame/50 animate-breathe" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 animate-breathe [animation-delay:-3s]" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 animate-orbit">
        <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame shadow-[0_0_24px_6px_rgb(254_102_1/0.6)]" />
      </div>

      <div className="arch relative aspect-[4/5] overflow-hidden border-[6px] border-white/10 bg-royal">
        {SLIDES.map((s, n) => (
          <div key={s.img} className={"absolute inset-0 transition-opacity duration-[1400ms] " + (n === i ? "opacity-100" : "opacity-0")} aria-hidden={n !== i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={n === i ? s.label : ""} className={"h-full w-full object-cover " + (n === i ? "animate-kenburns" : "")} />
          </div>
        ))}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-royal-deep/70 to-transparent" />
      </div>

      {/* floating label chip */}
      <div className="absolute -left-4 bottom-16 animate-float rounded-2xl bg-white px-5 py-3 text-royal-deep shadow-2xl sm:-left-10" aria-live="polite">
        <p className="text-xs font-semibold text-flame-deep">Now practising</p>
        <p className="font-display text-lg leading-tight">{SLIDES[i].label}</p>
      </div>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Hero slides">
        {SLIDES.map((s, n) => (
          <button key={s.label} role="tab" aria-selected={n === i} aria-label={s.label} onClick={() => setI(n)} className={"h-2 rounded-full transition-all duration-500 " + (n === i ? "w-9 bg-flame" : "w-2 bg-white/40 hover:bg-white/70")} />
        ))}
      </div>
    </div>
  );
}
