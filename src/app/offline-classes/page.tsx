import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { PlanBlock } from "@/components/Plans";
import { EnquireButton } from "@/components/Enquiry";
import { CLASS_PLANS } from "@/data/courses";
import { BRANCHES, OFFLINE_HOME } from "@/data/site";

export const metadata: Metadata = {
  title: "Offline Yoga Classes",
  description: "In-person yoga classes with hands-on guidance and a peaceful space to grow your body, mind, and soul.",
};

export default function Offline() {
  const p = CLASS_PLANS.offline;
  const hyd = BRANCHES[0];
  return (
    <>
      <PageHero
        title="Offline yoga classes"
        intro="Experience real connection: hands-on guidance and a peaceful space to grow your body, mind, and soul."
        crumbs={[{ label: "Home", href: "/" }, { label: "Offline classes" }]}
      />
      <section className="section">
        <div className="wrap">
          <h2 className="h-section">Regular practice sessions</h2>
          <p className="prose-lede mt-3">{p.schedule}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {p.dropIns.map((d) => (
              <div key={d.name} className="flex items-center justify-between rounded-2xl border border-flame/60 bg-white px-6 py-5">
                <span className="font-medium">{d.name}</span>
                <span className="font-display text-3xl text-royal">{d.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {p.classes.map((c) => <PlanBlock key={c.name} cls={c} />)}
            <article className="rounded-3xl bg-royal-deep p-6 text-white sm:p-9">
              <h3 className="text-2xl text-white sm:text-3xl">{p.unlimited.name}</h3>
              <p className="mt-2 text-white/75">{p.unlimited.days} · {p.unlimited.time}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {p.unlimited.plans.map((x) => (
                  <div key={x.term} className="rounded-2xl bg-white/[0.08] p-5 ring-1 ring-white/15">
                    <p className="text-sm font-semibold text-flame">{x.term}</p>
                    <p className="mt-1 font-display text-3xl text-white">{x.price}</p>
                    <p className="mt-2 text-sm text-white/70">{x.note}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-8 rounded-2xl bg-mist px-6 py-4 font-medium text-royal">{p.note}</p>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="h-section">Visit the studio</h2>
            <p className="mt-5 flex gap-3 text-lg text-ink/80"><MapPin className="mt-1 shrink-0 text-royal" size={20} /> {hyd.address}</p>
            <p className="mt-3 flex gap-3 text-lg text-ink/80"><Phone className="mt-1 shrink-0 text-royal" size={20} /> {p.contact}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={hyd.map} target="_blank" rel="noopener noreferrer" className="btn btn-royal">Open in Maps</a>
              <EnquireButton course="Offline yoga classes" className="btn btn-outline">Book a class</EnquireButton>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {OFFLINE_HOME.map((o) => (
              <li key={o.title} className="border-t border-royal/20 pt-4">
                <h3 className="text-xl">{o.title}</h3>
                <p className="mt-1 text-[0.95rem] text-ink/70">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
