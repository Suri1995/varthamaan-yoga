import Link from "next/link";
import { BadgeCheck, MapPin, Laptop } from "lucide-react";
import { COURSES } from "@/data/courses";
import { BRANCHES, HOME_FAQS, OFFLINE_HOME, ONLINE_SESSIONS, TEAM, WORKSHOPS } from "@/data/site";
import { CourseCard, SectionTitle } from "@/components/ui";
import { EnquireButton } from "@/components/Enquiry";
import Faq from "@/components/Faq";
import Carousel from "@/components/Carousel";
import HeroSlider from "@/components/HeroSlider";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import TestimonialSlider from "@/components/TestimonialSlider";

const U = "https://varthamaanyoga.com/wp-content/uploads/2025/03/";

export default function Home() {
  const clip = (t: string) => (t.length > 210 ? t.slice(0, 210).replace(/\s+\S*$/, "") + "…" : t);
  const pool = COURSES.flatMap((c) => c.reviews.slice(0, 2).map((r) => ({ text: clip(r.text), name: r.name, course: c.badge })));
  const quotes = [
    { who: "Talluri Sahaja", where: "RYT 200", text: COURSES.find((c) => c.slug === "200-hour-yoga-teacher-training")!.reviews[0].text.split(". ").slice(0, 3).join(". ") + "." },
    { who: "Ravi", where: "Aerial Yoga TTC", text: "I was a beginner in aerial yoga, but the course was super beginner-friendly. The team focused a lot on safety and alignment. Plus, the practice in the silk hammock was so therapeutic." },
    { who: "Chenna Akhila", where: "Pregnancy Yoga TTC", text: "This training was a life-changing journey. I not only learned safe and effective practices for pregnant women, but also how to guide them with compassion and confidence." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-ground relative overflow-hidden text-white">
        <div aria-hidden className="animate-orb pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-flame/20 blur-3xl" />
        <div aria-hidden className="animate-orb pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-royal-soft/50 blur-3xl [animation-delay:-6s]" />
        <div className="wrap relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="animate-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/85">
              <BadgeCheck size={16} className="text-flame" /> Accredited with Yoga Alliance USA
            </p>
            <h1 className="text-5xl text-white sm:text-6xl lg:text-7xl">Integration of Mind and Body Together</h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Our bodies are often stronger than we realize. It&rsquo;s the mind that needs to be aligned. At Varthamaan Yoga, we believe in uniting the body and mind to achieve complete physical and mental well-being.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <EnquireButton course="">Join us now</EnquireButton>
              <Link href="/courses" className="btn btn-ghost">Explore courses</Link>
            </div>
          </div>

          <HeroSlider />
        </div>

        <div className="border-t border-white/10">
          <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-5 text-[0.95rem] text-white/80">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-flame" /> Hyderabad, Khammam, Warangal, Guntur</span>
            <span className="flex items-center gap-2"><Laptop size={16} className="text-flame" /> Online and offline sessions</span>
            <span>Small batches, personal attention</span>
          </div>
        </div>
      </section>

      {/* STATS + MARQUEE */}
      <section>
        <div className="wrap grid grid-cols-2 gap-y-10 py-16 text-center sm:grid-cols-4">
          {[[4, "", "Centres across two states"], [9, "", "Teacher training courses"], [10, "", "Expert teachers and therapists"], [300, "h", "Advanced RYT certification"]].map(([n, suf, l]) => (
            <div key={String(l)}>
              <p className="font-display text-5xl text-royal sm:text-6xl"><Counter to={n as number} suffix={suf as string} /></p>
              <div className="flame-rule mx-auto my-3" />
              <p className="text-[0.95rem] text-ink/70">{l}</p>
            </div>
          ))}
        </div>
        <Marquee items={["Ashtanga Vinyasa", "Hatha Flow", "Aerial Yoga", "Yin Yoga", "Pranayama", "Yoga Therapy", "Prenatal Yoga", "Meditation"]} />
      </section>

      {/* COURSES RAIL */}
      <section className="section overflow-hidden">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="h-section max-w-xl">Explore our yoga training courses</h2>
            <Link href="/courses" className="btn btn-outline">View all courses</Link>
          </div>
        </div>
        <Carousel label="Yoga training courses" autoplay={4800}>
          {COURSES.map((c) => <CourseCard key={c.slug} c={c} />)}
        </Carousel>
      </section>

      {/* ONLINE SESSIONS */}
      <section className="bg-mist section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="h-section">Online sessions</h2>
            <p className="mt-2 font-display text-2xl text-royal">Asana Program</p>
            <p className="prose-lede mt-5">Practise live from wherever you are, with plans from one month to a year.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EnquireButton course="Online yoga classes" className="btn btn-royal">Book now</EnquireButton>
              <Link href="/online-classes" className="btn btn-outline">See fees</Link>
            </div>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {ONLINE_SESSIONS.map((s) => (
              <li key={s.title} className="border-t border-royal/20 py-6">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink/70">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEEP THOUGHT / HOLISTIC */}
      <section className="section">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {[
            { t: "Deep Thought", d: "Seize the opportunity for authenticity, support, and inspiration where aspiring trainers feel empowered to reach their fullest potential.", img: U + "Holistic-Approach.png" },
            { t: "Holistic Approach", d: "Explore the depths of physical, mental, emotional, and spiritual wellness to discover true balance and lasting fulfillment. Now is the moment to prioritize your well-being and embrace life at its fullest potential.", img: U + "Customize-your-practice.png" },
          ].map((p) => (
            <div key={p.t} className="flex gap-6 rounded-3xl bg-white p-7 shadow-[0_18px_40px_-30px_rgb(42_11_77/0.6)] sm:p-9">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt="" className="h-20 w-20 shrink-0 rounded-2xl object-contain" loading="lazy" />
              <div>
                <h3 className="text-2xl">{p.t}</h3>
                <p className="mt-3 text-ink/75">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-royal-deep text-white">
        <div className="wrap grid items-start gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 inline-block rounded-full bg-flame px-4 py-1 text-sm font-semibold text-royal-deep">New course will start soon!</p>
            <h2 className="h-section text-white">Why choose Varthamaan Yoga</h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              At Varthamaan Yoga, our primary purpose is to provide high quality, advanced yoga teacher training courses that enable individuals to pursue their passion for yoga and teaching.
            </p>
            <Link href="/about" className="btn btn-flame mt-8">Read more about us</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { t: "Research Study", d: "Our flagship programs, ranging from RYT 200 to Yin Yoga, are grounded in research to help you master techniques safely and confidently, minimizing the risk of injury.", img: U + "deep-study-12.png" },
              { t: "Diverse class", d: "From Ashtanga to Yin, we've got something for everyone! Whether you're starting out or looking to deepen your practice, you'll find options to suit your journey.", img: U + "4.png" },
            ].map((p) => (
              <div key={p.t} className="rounded-3xl bg-white/[0.07] p-7 ring-1 ring-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" className="mb-5 h-14 w-14 object-contain" loading="lazy" />
                <h3 className="text-xl text-white">{p.t}</h3>
                <p className="mt-3 text-[0.97rem] text-white/75">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title="Our workshop programs" />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((w) => (
              <article key={w.title}>
                <div className="mb-5 flex h-28 items-center justify-center rounded-2xl bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" className="max-h-20 w-auto object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl">{w.title}</h3>
                <p className="mt-2 text-ink/70">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFLINE */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="h-section">Check our offline classes</h2>
            <Link href="/offline-classes" className="btn btn-outline">Class fees and schedule</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFLINE_HOME.map((o) => (
              <article key={o.title} className="overflow-hidden rounded-3xl bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{o.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink/70">{o.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 rounded-3xl bg-white p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-flame-deep">Our yoga studio</p>
              <h2 className="h-section mt-1">Our offerings</h2>
              <p className="prose-lede mt-4">Join us at Varthamaan Yoga with flexible class schedules designed to fit your lifestyle.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {BRANCHES.map((b) => (
                  <Link key={b.slug} href={`/branches/${b.slug}`} className="btn btn-outline !px-5 !py-2.5">{b.city}</Link>
                ))}
              </div>
            </div>
            <ul className="divide-y divide-royal/15 self-center border-y border-royal/15">
              {["Teacher Training programs", "Online & Offline practice sessions", "Ashtanga, Hatha, Yin, Aerial Yoga", "Yoga Workshops", "Therapeutic Yoga", "Kids & Prenatal Yoga"].map((o) => (
                <li key={o} className="py-3.5 font-medium">{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="wrap">
          <SectionTitle title="Meet our team" lede="Experienced practitioners, scholars and therapists who teach every course." />
          </div>
        <Carousel label="Our team">
          {TEAM.map((t) => (
            <article key={t.name} className="group w-[14rem] shrink-0 sm:w-[16rem]">
              <div className="arch relative mb-4 aspect-[4/5] overflow-hidden bg-mist">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full bg-gradient-to-t from-royal-deep/80 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              </div>
              <h3 className="text-lg">{t.name}</h3>
              <p className="mt-1 text-sm text-ink/65">{t.role}</p>
            </article>
          ))}
        </Carousel>
      </section>

      {/* COMMUNITY */}
      <section className="section hero-ground text-white" data-no-reveal>
        <div className="wrap">
          <h2 className="h-section mb-12 text-center text-white">Hear from our community</h2>
          <TestimonialSlider items={pool} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="h-section">FAQs</h2>
            <p className="prose-lede mt-4">Still unsure? Call or WhatsApp +91 63033 06297.</p>
          </div>
          <Faq items={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
