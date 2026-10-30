"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div className="flame-grad h-full origin-left" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
