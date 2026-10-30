import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { PlanBlock } from "@/components/Plans";
import { EnquireButton } from "@/components/Enquiry";
import { CLASS_PLANS } from "@/data/courses";
import { ONLINE_SESSIONS } from "@/data/site";

export const metadata: Metadata = {
  title: "Online Yoga Course",
  description: "Join our online yoga course to build strength, improve flexibility, and find inner peace, anytime, anywhere.",
};

export default function Online() {
  const p = CLASS_PLANS.online;
  return (
    <>
      <PageHero
        title="Online yoga course"
        intro="Find below our pricelist for yoga classes and packages."
        crumbs={[{ label: "Home", href: "/" }, { label: "Online classes" }]}
      />
      <section className="section">
        <div className="wrap">
          <h2 className="h-section mb-10">Regular practice sessions</h2>
          <div className="space-y-8">
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
          <p className="mt-4 text-ink/75">Contact: {p.contact}</p>
          <div className="mt-6"><EnquireButton course="Online yoga classes" className="btn btn-royal">Book now</EnquireButton></div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="h-section mb-10">What you can practise online</h2>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {ONLINE_SESSIONS.map((s) => (
              <li key={s.title} className="border-t border-royal/20 py-6">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink/70">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
