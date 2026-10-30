"use client";
import { useState } from "react";

/** Tries the full-size image first, falls back to the thumbnail if it 404s. */
export default function SmartImg({ src, fallback, className, alt = "" }: { src: string; fallback: string; className?: string; alt?: string }) {
  const [s, setS] = useState(src);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={s} alt={alt} loading="lazy" className={className} onError={() => s !== fallback && setS(fallback)} />;
}
