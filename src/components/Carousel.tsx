"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Scroll-snap carousel: arrows, drag-to-scroll, progress bar, optional autoplay (pauses on hover/focus). */
export default function Carousel({ children, autoplay = 0, label }: { children: React.ReactNode; autoplay?: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  const by = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) return el.scrollTo({ left: 0, behavior: "smooth" });
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.7), behavior: "smooth" });
  };

  useEffect(() => {
    update();
    const el = ref.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el?.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [update]);

  useEffect(() => {
    if (!autoplay || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => by(1), autoplay);
    return () => clearInterval(id);
  }, [autoplay, paused]);

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    drag.current = { down: true, x: e.clientX, left: ref.current!.scrollLeft, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    const el = ref.current!;
    el.style.scrollSnapType = "none";
    el.scrollLeft = d.left - dx;
  };
  const end = () => {
    drag.current.down = false;
    if (ref.current) ref.current.style.scrollSnapType = "";
  };

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={end}
        onPointerLeave={end}
        onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; } }}
        className="rail flex cursor-grab gap-6 overflow-x-auto px-5 pb-6 active:cursor-grabbing sm:px-8 lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] [&_img]:select-none [&_img]:[-webkit-user-drag:none]"
      >
        {children}
        <div aria-hidden className="w-1 shrink-0 lg:w-[max(2rem,calc((100vw-76rem)/2))]" />
      </div>
      <div className="wrap mt-4 flex items-center gap-6">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-royal/10" aria-hidden>
          <div className="flame-grad h-full rounded-full transition-[width] duration-300" style={{ width: `${Math.max(8, progress * 100)}%` }} />
        </div>
        <div className="flex gap-2">
          <button onClick={() => by(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-royal/25 text-royal transition-colors hover:bg-royal hover:text-white"><ChevronLeft size={20} /></button>
          <button onClick={() => by(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full bg-royal text-white transition-colors hover:bg-flame hover:text-royal-deep"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}
