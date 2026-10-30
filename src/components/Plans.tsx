type Plan = { term: string; price: string; note: string };
type Cls = { name: string; days: string; time: string; plans: Plan[] };

export function PlanBlock({ cls }: { cls: Cls }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-28px_rgb(42_11_77/0.55)] sm:p-9">
      <h3 className="text-2xl sm:text-3xl">{cls.name}</h3>
      <p className="mt-2 text-ink/70">{cls.days} · {cls.time}</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cls.plans.map((p) => (
          <div key={p.term} className="rounded-2xl border border-royal/15 p-5">
            <p className="text-sm font-semibold text-royal">{p.term}</p>
            <p className="mt-1 font-display text-3xl">{p.price}</p>
            <p className="mt-2 text-sm text-ink/65">{p.note}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
