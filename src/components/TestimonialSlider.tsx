"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type T = { text: string; name: string; course: string };

export default function TestimonialSlider({ items }: { items: T[] }) {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const go = (d: number) => setI((n) => (n + d + items.length) % items.length);
  useEffect(() => {
    if (hover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [hover, items.length]);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} role="region" aria-roledescription="carousel" aria-label="Student reviews" className="relative mx-auto max-w-4xl text-center">
      <Quote aria-hidden size={56} className="mx-auto mb-6 text-flame" />
      <div className="relative min-h-[17rem] sm:min-h-[14rem]" aria-live="polite">
        {items.map((t, n) => (
          <figure key={t.name + t.course} className={"absolute inset-0 transition-all duration-700 " + (n === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")} aria-hidden={n !== i}>
            <blockquote className="font-display text-xl leading-snug text-white sm:text-3xl">{t.text}</blockquote>
            <figcaption className="mt-6 text-white/75"><span className="font-semibold text-white">{t.name}</span>, {t.course}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-5">
        <button onClick={() => go(-1)} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"><ChevronLeft size={20} /></button>
        <div className="flex max-w-[12rem] flex-wrap justify-center gap-1.5">
          {items.map((t, n) => (
            <button key={t.name + t.course} aria-label={`Review ${n + 1}`} onClick={() => setI(n)} className={"h-1.5 rounded-full transition-all " + (n === i ? "w-6 bg-flame" : "w-1.5 bg-white/35")} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full bg-flame text-royal-deep hover:bg-white"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
