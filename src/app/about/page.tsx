import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionTitle } from "@/components/ui";
import { EnquireButton } from "@/components/Enquiry";
import { YOGA_ALLIANCE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Expert-led yoga courses to enhance flexibility, strength, and mindfulness. Suitable for all levels. Accredited with Yoga Alliance USA.",
};

export default function About() {
  return (
    <>
      <PageHero
        title="About Varthamaan Yoga"
        intro="Our story began with a shared passion for the transformative power of yoga."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="h-section">About Varthamaan Yoga</h2>
            <p className="mt-6 text-lg text-ink/80">
              Founded by a group of dedicated practitioners, we recognized a growing need for high-quality training within the yoga community. Since our inception, we have been committed to research-based methodologies, ensuring that every aspiring instructor receives comprehensive education rooted in both ancient traditions and modern techniques.
            </p>
            <p className="mt-4 text-lg text-ink/80">
              Over the years, we have proudly nurtured countless yogis into exceptional teachers, expanding our influence and bringing the essence of yoga to communities far and wide. All the Varthamaan courses are accredited with Yoga Alliance USA.
            </p>
            <Link href="/contact" className="btn btn-royal mt-8">Contact now</Link>
          </div>
          <div className="arch overflow-hidden bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://varthamaanyoga.com/wp-content/uploads/2025/06/varthamaanyoga.com-about-us-varthamaan-yoga-team.jpg" alt="The Varthamaan Yoga team" className="aspect-[4/4.4] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://varthamaanyoga.com/wp-content/uploads/2025/03/1200-x-1800-px-2100-x-1400-px-2-1024x683.png" alt="" className="w-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="h-section">Purpose and goals</h2>
            <p className="mt-6 text-lg text-ink/80">
              Our primary mission is to cultivate a new generation of skilled and knowledgeable yoga teachers who not only excel in their practice but also embody the true spirit of yoga. We aim to empower individuals through rigorous training that emphasizes safety, accessibility, and deep understanding.
            </p>
            <p className="mt-4 text-lg text-ink/80">
              Our courses are meticulously crafted to promote lifelong learning and personal growth, aligning with our vision of enhancing wellness in society. We aspire to be a beacon of quality and authenticity in the yoga education landscape, bridging the gap between ancient wisdom and contemporary needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-4xl">
          <h2 className="h-section">Introduction to the team</h2>
          <p className="mt-6 text-lg text-ink/80">
            Our team is an eclectic mix of experienced yoga practitioners, scholars, and industry professionals. Each member brings a wealth of knowledge and a unique perspective to our training programs. Our lead instructors are certified yogis with extensive backgrounds in both practice and mentoring, passionate about guiding the next generation of teachers.
          </p>
          <p className="mt-4 text-lg text-ink/80">
            Together, we foster a supportive and inclusive environment, encouraging students to explore their potential and develop their personal teaching styles.
          </p>
          <Link href="/contact" className="btn btn-outline mt-8">Contact us now</Link>
        </div>
      </section>

      <section className="section bg-royal-deep text-white">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="h-section text-white">Join our globally acclaimed certification course</h2>
            <h3 className="mt-8 font-sans text-lg font-semibold text-flame">Yoga Alliance accredited school</h3>
            <p className="mt-2 text-white/80">Yoga Alliance USA is a reputable organization that establishes standards for yoga teacher training and certification. It ensures that yoga schools and instructors maintain high educational and professional standards, promoting a community of well-trained yoga instructors.</p>
            <h3 className="mt-6 font-sans text-lg font-semibold text-flame">Are you ready to embark on your yoga teaching journey?</h3>
            <p className="mt-2 text-white/80">Join us to receive the highest quality training and become a part of our vibrant community. Whether you&rsquo;re looking to become a certified instructor or simply deepen your practice, we invite you to explore our offerings. Contact us today to learn more about our courses, schedules, and how we can help you achieve your goals.</p>
            <EnquireButton course="" className="btn btn-flame mt-8">Contact now</EnquireButton>
          </div>
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://varthamaanyoga.com/wp-content/uploads/2025/05/Untitled-design-1-1024x819.jpg" alt="Yoga Alliance accreditation" className="w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle title="What is Yoga Alliance USA?" />
          <div className="grid gap-10 md:grid-cols-3">
            {[["History and mission", YOGA_ALLIANCE.history], ["Core values", YOGA_ALLIANCE.values], ["Membership", YOGA_ALLIANCE.membership]].map(([t, d]) => (
              <div key={t} className="border-t-2 border-flame pt-5">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-ink/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionTitle title="Advantages of Yoga Alliance USA certification" />
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {YOGA_ALLIANCE.advantages.map((a) => (
              <div key={a.title}>
                <h3 className="text-xl">{a.title}</h3>
                <p className="mt-2 text-ink/75">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap text-center">
          <h2 className="h-section mx-auto max-w-2xl">&ldquo;Transform yourselves &amp; inspire others&rdquo;</h2>
          <EnquireButton course="" className="btn btn-royal mt-9">Join our class</EnquireButton>
        </div>
      </section>
    </>
  );
}
