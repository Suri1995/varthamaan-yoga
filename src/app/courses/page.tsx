import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { COURSES, type Course } from "@/data/courses";
import { EnquireButton } from "@/components/Enquiry";

export const metadata: Metadata = {
  title: "Certificate Courses",
  description: "Yoga teacher training courses at Varthamaan Yoga: RYT 200, RYT 300, Multi Style, Aerial, Yin, Pregnancy and Yoga Therapy.",
};

const GROUPS: { title: string; lede: string; slugs: string[] }[] = [
  {
    title: "Foundation and advanced teacher training",
    lede: "From a one-month online start to a 300 hour advanced certification.",
    slugs: ["100-hour-yoga-teacher-training", "200-hour-yoga-ttc", "200-hour-yoga-teacher-training", "multi-style-yoga-teacher-training", "300-hour-yoga-teacher-training"],
  },
  {
    title: "Specialised trainings",
    lede: "Focused certifications to add a new skill to your teaching.",
    slugs: ["aerial-yoga-teacher-training", "yin-yoga-teacher-training", "pregnancy-yoga-teacher-training-course", "yoga-therapy-teacher-training"],
  },
];

function Row({ c }: { c: Course }) {
  return (
    <article className="group grid gap-5 border-t border-royal/20 py-8 md:grid-cols-[9rem_1fr_auto] md:items-center md:gap-10">
      <div>
        <p className="font-display text-4xl text-royal">{c.hours.replace(" Hours", "")}</p>
        <p className="text-sm font-medium text-ink/60">hours · {c.badge}</p>
      </div>
      <div>
        <h3 className="text-2xl sm:text-3xl"><Link href={`/courses/${c.slug}`} className="hover:text-royal">{c.title}</Link></h3>
        <p className="mt-2 max-w-2xl text-ink/70">{c.homeBlurb}</p>
        <p className="mt-3 text-sm font-medium text-royal">{c.mode} · {c.duration} · from {c.headlineFee}</p>
      </div>
      <div className="flex gap-3 md:flex-col">
        <Link href={`/courses/${c.slug}`} className="btn btn-royal !px-6 !py-3">View course</Link>
        <EnquireButton course={c.title} className="btn btn-outline !px-6 !py-3">Enquire</EnquireButton>
      </div>
    </article>
  );
}

export default function Courses() {
  return (
    <>
      <PageHero
        title="Certificate courses"
        intro="Yoga Alliance accredited teacher trainings, taught in small batches by experienced mentors in Hyderabad, Khammam, Warangal and Guntur, and online."
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />
      <div className="wrap section space-y-20">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="h-section">{g.title}</h2>
            <p className="prose-lede mt-3">{g.lede}</p>
            <div className="mt-8 border-b border-royal/20">
              {g.slugs.map((s) => <Row key={s} c={COURSES.find((c) => c.slug === s)!} />)}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
