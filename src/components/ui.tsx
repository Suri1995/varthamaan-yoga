import Link from "next/link";
import { Clock, Laptop, MapPin } from "lucide-react";
import type { Course } from "@/data/courses";
import SmartImg from "./SmartImg";

export function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="hero-ground relative overflow-hidden text-white">
      <div aria-hidden className="animate-orb pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-flame/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border border-white/10" />
      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-[18rem] w-[18rem] rounded-full border border-flame/30" />
      <div className="wrap relative py-16 sm:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/65">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? <Link href={c.href} className="hover:text-flame">{c.label}</Link> : <span className="text-white/90">{c.label}</span>}
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ title, lede, center }: { title: string; lede?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}>
      <h2 className="h-section">{title}</h2>
      {lede && <p className="prose-lede mt-4">{lede}</p>}
    </div>
  );
}

export function CourseCard({ c }: { c: Course }) {
  return (
    <Link
      href={`/courses/${c.slug}`}
      className="group flex w-[17.5rem] shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_0_rgb(76_20_135/0.08),0_18px_40px_-24px_rgb(42_11_77/0.5)] tilt-card sm:w-[19rem]"
    >
      <div className="arch m-3 mb-0 aspect-[4/4.4] overflow-hidden bg-mist">
        <SmartImg src={c.image.replace("-300x200", "")} fallback={c.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-flame-deep">{c.badge}</p>
        <h3 className="mt-1 text-xl">{c.title}</h3>
        <p className="mt-2 line-clamp-3 text-[0.95rem] text-ink/70">{c.homeBlurb}</p>
        <p className="mt-auto pt-5 text-sm font-semibold text-royal">{c.hours} · {c.mode}</p>
      </div>
    </Link>
  );
}

export function ModeTag({ mode }: { mode: string }) {
  const online = /online/i.test(mode);
  const Icon = online ? Laptop : MapPin;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-sm font-medium text-royal">
      <Icon size={14} /> {mode}
    </span>
  );
}

export function DurationTag({ d }: { d: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-sm font-medium text-royal">
      <Clock size={14} /> {d}
    </span>
  );
}
