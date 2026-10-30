"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds staggered scroll-reveal to blocks inside <main> sections (skips the first/hero section and carousels). */
export default function AutoReveal() {
  const path = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const sections = Array.from(document.querySelectorAll("main > section, main > div > section")).slice(1);
    const targets: HTMLElement[] = [];
    sections.forEach((sec) => {
      sec.querySelectorAll<HTMLElement>(":scope > .wrap > *, :scope > .wrap > .grid > *, :scope > .wrap > ul > *, :scope > .wrap > div > .grid > *").forEach((el) => {
        if (el.closest(".rail") || el.closest("[data-no-reveal]")) return;
        targets.push(el);
      });
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((el, i) => {
      const sibIdx = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : i;
      el.style.setProperty("--d", `${Math.min(sibIdx, 6) * 80}ms`);
      el.classList.add("rv");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
