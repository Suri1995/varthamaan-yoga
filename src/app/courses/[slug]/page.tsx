import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { COURSES, getCourse } from "@/data/courses";
import { BRANCHES, SITE } from "@/data/site";
import { CourseCard, DurationTag, ModeTag, SectionTitle } from "@/components/ui";
import { EnquireButton } from "@/components/Enquiry";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCourse(params.slug);
  if (!c) return {};
  return { title: c.title, description: c.intro[0].slice(0, 155) };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const c = getCourse(params.slug);
  if (!c) notFound();
  const others = COURSES.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero-ground relative overflow-hidden text-white">
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-[-12rem] h-[30rem] w-[30rem] rounded-full border border-white/10" />
        <div className="wrap relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/65">
              <Link href="/" className="hover:text-flame">Home</Link><span aria-hidden>/</span>
              <Link href="/courses" className="hover:text-flame">Courses</Link><span aria-hidden>/</span>
              <span className="text-white/90">{c.title}</span>
            </nav>
            <p className="mb-3 inline-block rounded-full bg-flame px-4 py-1 text-sm font-semibold text-royal-deep">{c.badge} · {c.hours}</p>
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">{c.intro[0]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EnquireButton course={c.title}>Enroll now</EnquireButton>
              <a href={SITE.whatsappText(c.whatsappTopic)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MessageCircle size={18} /> WhatsApp</a>
              <a href={`tel:${SITE.admissionsTel}`} className="btn btn-ghost"><Phone size={18} /> {SITE.admissionsPhone}</a>
            </div>
          </div>

          <aside className="rounded-3xl bg-white p-7 text-ink shadow-2xl sm:p-9" aria-label="Course details">
            <div className="flex flex-wrap gap-2"><ModeTag mode={c.mode} /><DurationTag d={c.duration} /></div>
            <p className="mt-5 text-sm text-ink/60">{c.headlineFeeLabel}</p>
            <p className="font-display text-5xl text-royal">{c.headlineFee}</p>
            <dl className="mt-6 divide-y divide-royal/10">
              {c.quickFacts.map((r) => (
                <div key={r.label} className="flex justify-between gap-4 py-3 text-[0.95rem]">
                  <dt className="text-ink/60">{r.label}</dt>
                  <dd className="text-right font-medium">{r.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h-section">{c.introTitle}</h2>
            {c.intro.map((p) => <p key={p} className="mt-5 text-lg text-ink/80">{p}</p>)}
            <EnquireButton course={c.title} className="btn btn-royal mt-8">Enroll now</EnquireButton>
          </div>
          <div className="overflow-hidden rounded-3xl bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.heroImage} alt={c.title} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      {c.overview.length > 0 && (
        <section className="section bg-mist">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="arch mx-auto w-full max-w-sm overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.overviewImage} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="h-section">{c.title} course overview</h2>
              {c.overview.map((p) => <p key={p} className="mt-5 text-lg text-ink/80">{p}</p>)}
            </div>
          </div>
        </section>
      )}

      {/* CURRICULUM */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title={c.curriculumTitle} />
          <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
            {c.curriculum.map((m) => (
              <div key={m.title} className="border-t border-royal/20 py-6">
                <h3 className="text-xl">{m.title}</h3>
                <p className="mt-2 text-ink/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-royal-deep text-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.whyImage} alt="" className="w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="h-section text-white">Why choose Varthamaan, Hyderabad, India?</h2>
            <p className="mt-5 text-lg text-white/80">{c.whyHyderabad}</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title={`Benefits of ${c.title}`} lede="Grow stronger, more flexible, and find inner peace with expert-led yoga sessions." />
          <div className="grid gap-6 sm:grid-cols-2">
            {c.benefits.map((b) => (
              <div key={b.title} className="rounded-3xl border border-royal/15 bg-white p-7">
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-2 text-ink/70">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><EnquireButton course={c.title} className="btn btn-royal">Enroll now</EnquireButton></div>
        </div>
      </section>

      {/* LEARN */}
      <section className="section bg-mist">
        <div className="wrap">
          <SectionTitle title={c.learnTitle} />
          <div className="grid gap-x-12 md:grid-cols-2">
            {c.learn.map((l) => (
              <div key={l.title} className="border-t border-royal/20 py-5">
                <h3 className="font-sans text-lg font-semibold">{l.title}</h3>
                <p className="mt-1 text-ink/70">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      {c.who.length > 0 && (
        <section className="section">
          <div className="wrap">
            <SectionTitle title="Who can join this course?" lede="Age, fitness level, or background isn't a barrier, as most courses are designed for different skill levels." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.who.map((w) => (
                <div key={w.title} className="rounded-2xl bg-white p-6 ring-1 ring-royal/15">
                  <h3 className="font-sans text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-[0.93rem] text-ink/70">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICATE + DETAILS */}
      <section className="section bg-mist">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h-section">{c.title} certificate</h2>
            <div className="mt-8 overflow-hidden rounded-3xl bg-white p-3 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.certificateImage} alt={`${c.title} certificate`} className="w-full rounded-2xl object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <h2 className="h-section">{c.title} details</h2>
            <dl className="mt-8 divide-y divide-royal/15 rounded-3xl bg-white px-6 py-2 sm:px-8">
              {c.detailRows.map((r) => (
                <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-ink/60">{r.label}</dt>
                  <dd className="font-medium">{r.value}</dd>
                </div>
              ))}
            </dl>
            {c.offerNotes?.map((n) => <p key={n} className="mt-4 text-sm text-ink/70">{n}</p>)}
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquireButton course={c.title} className="btn btn-royal">Enroll now</EnquireButton>
              <a href={`tel:${SITE.admissionsTel}`} className="btn btn-outline">Call {SITE.admissionsPhone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title={`${c.title} reviews`} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-3xl border border-royal/15 bg-white p-7">
                <blockquote className="text-[0.98rem] text-ink/80">{r.text}</blockquote>
                <figcaption className="mt-auto pt-5 font-display text-lg">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATION + FAQ */}
      <section className="section bg-mist">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="h-section">Accreditations</h2>
            <h3 className="mt-6 font-sans text-lg font-semibold text-royal">Anticipating the importance of accreditation</h3>
            <p className="mt-2 text-ink/75">An upcoming affiliation with Yoga Alliance will signify that all educational standards are set to be met successfully, ensuring a high-quality learning experience.</p>
            <h3 className="mt-6 font-sans text-lg font-semibold text-royal">Factors to consider before joining</h3>
            <p className="mt-2 text-ink/75">As you prepare to select your yoga school, it will be essential to consider important factors such as the curriculum content, the qualifications of teachers, and testimonials and reviews from former students.</p>
          </div>
          <div>
            <h2 className="h-section mb-8">FAQs: {c.title}</h2>
            <Faq items={c.faqs} />
          </div>
        </div>
      </section>

      {/* BRANCHES + RELATED */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title="Varthamaan Yoga centres" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRANCHES.map((b) => (
              <Link key={b.slug} href={`/branches/${b.slug}`} className="rounded-3xl border border-royal/15 bg-white p-6 transition-colors hover:border-royal">
                <h3 className="text-2xl">{b.city}</h3>
                <p className="mt-2 text-sm text-ink/65">{b.address}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <h2 className="h-section mb-8">More courses</h2>
        </div>
        <Carousel label="Courses">
          {others.map((o) => <CourseCard key={o.slug} c={o} />)}
        </Carousel>
      </section>
    </>
  );
}
