"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-royal/15 border-y border-royal/15">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3 className="font-sans text-base font-medium">
              <button
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.05rem] font-semibold text-ink"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {it.q}
                <Plus size={20} className={"shrink-0 text-royal transition-transform duration-200 " + (isOpen ? "rotate-45" : "")} />
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={!isOpen} className="pb-6 pr-10 text-ink/75">{it.a}</div>
          </div>
        );
      })}
    </div>
  );
}
