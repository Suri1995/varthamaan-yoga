import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { BRANCHES } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Branches",
  description: "Varthamaan Yoga centres in Hyderabad, Khammam, Warangal and Guntur.",
};

export default function Branches() {
  return (
    <>
      <PageHero
        title="Our branches"
        intro="Four centres across Telangana and Andhra Pradesh, one curriculum."
        crumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
      />
      <section className="section">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {BRANCHES.map((b) => (
            <article key={b.slug} className="group overflow-hidden rounded-3xl bg-white shadow-[0_24px_50px_-34px_rgb(42_11_77/0.7)]">
              <Link href={`/branches/${b.slug}`} className="block aspect-[16/9] overflow-hidden bg-mist">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt={`Varthamaan Yoga ${b.city}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </Link>
              <div className="p-7 sm:p-9">
                <h2 className="text-3xl">{b.city}</h2>
                <p className="text-sm font-medium text-flame-deep">{b.area}</p>
                <p className="mt-4 flex gap-2.5 text-[0.95rem] text-ink/75"><MapPin size={17} className="mt-1 shrink-0 text-royal" />{b.address}</p>
                <a href={`tel:+91${b.phone}`} className="mt-2 flex items-center gap-2.5 font-semibold text-royal"><Phone size={17} /> {b.phone}</a>
                <Link href={`/branches/${b.slug}`} className="btn btn-royal mt-6">View branch</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
