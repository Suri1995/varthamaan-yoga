export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="pause-on-hover overflow-hidden border-y border-royal/10 bg-white py-5" aria-hidden>
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl text-royal sm:text-4xl">
            {t}
            <span className="h-3 w-3 rotate-45 rounded-[3px] bg-flame" />
          </span>
        ))}
      </div>
    </div>
  );
}
