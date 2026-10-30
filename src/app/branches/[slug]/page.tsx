import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone } from "lucide-react";
import { BRANCHES } from "@/data/site";
import { COURSES } from "@/data/courses";
import { CourseCard, SectionTitle } from "@/components/ui";
import { EnquireButton } from "@/components/Enquiry";
import Carousel from "@/components/Carousel";

export function generateStaticParams() {
  return BRANCHES.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = BRANCHES.find((x) => x.slug === params.slug);
  return b ? { title: `Yoga in ${b.city}`, description: b.intro.slice(0, 155) } : {};
}

export default function Branch({ params }: { params: { slug: string } }) {
  const b = BRANCHES.find((x) => x.slug === params.slug);
  if (!b) notFound();
  const courses = b.courseSlugs.map((s) => COURSES.find((c) => c.slug === s)!).filter(Boolean);
  const others = BRANCHES.filter((x) => x.slug !== b.slug);
  const q = encodeURIComponent(`Varthamaan Yoga ${b.address}`);

  return (
    <>
      <section className="hero-ground relative overflow-hidden text-white">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border border-white/10" />
        <div className="wrap relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/65">
              <Link href="/" className="hover:text-flame">Home</Link><span aria-hidden>/</span>
              <Link href="/branches" className="hover:text-flame">Branches</Link><span aria-hidden>/</span>
              <span className="text-white/90">{b.city}</span>
            </nav>
            <h1 className="text-5xl text-white sm:text-6xl">Varthamaan Yoga {b.city}</h1>
            <p className="mt-2 text-lg font-medium text-flame">{b.area}</p>
            <p className="mt-5 max-w-xl text-lg text-white/80">{b.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+91${b.phone}`} className="btn btn-flame"><Phone size={18} /> {b.phone}</a>
              <a href={b.map} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MapPin size={18} /> Get directions</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.image} alt={`Varthamaan Yoga ${b.city}`} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h-section">What you can do here</h2>
            <ul className="mt-8 divide-y divide-royal/15 border-y border-royal/15">
              {b.offers.map((o) => <li key={o} className="py-4 text-lg">{o}</li>)}
            </ul>
            <EnquireButton course="" className="btn btn-royal mt-8">Join a class at {b.city}</EnquireButton>
          </div>
          <div>
            <h2 className="h-section">Find us</h2>
            <p className="mt-6 flex gap-3 text-lg text-ink/80"><MapPin size={20} className="mt-1 shrink-0 text-royal" />{b.address}</p>
            <p className="mt-3 flex gap-3 text-lg text-ink/80"><Phone size={20} className="mt-1 shrink-0 text-royal" /><a href={`tel:+91${b.phone}`} className="font-semibold text-royal">{b.phone}</a></p>
            <div className="mt-6 overflow-hidden rounded-3xl bg-mist">
              <iframe
                title={`Map of Varthamaan Yoga ${b.city}`}
                src={`https://www.google.com/maps?q=${q}&output=embed`}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="wrap"><SectionTitle title={`Courses at ${b.city}`} /></div>
        <Carousel label="Courses">
          {courses.map((c) => <CourseCard key={c.slug} c={c} />)}
        </Carousel>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle title="Other branches" />
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/branches/${o.slug}`} className="rounded-3xl border border-royal/15 bg-white p-7 transition-colors hover:border-royal">
                <h3 className="text-2xl">{o.city}</h3>
                <p className="mt-1 text-sm text-ink/60">{o.area}</p>
                <p className="mt-3 font-semibold text-royal">{o.phone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
