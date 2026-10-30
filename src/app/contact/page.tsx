import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { EnquireForm } from "./form";
import { BRANCHES } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to us for any inquiries, assistance, or enrollment details. We're here to help.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact us"
        intro="Reach out to us for any inquiries, assistance, or enrollment details. We're here to help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="h-section">Let&rsquo;s chat!</h2>
            <p className="prose-lede mt-4">Get in touch with us for questions, support, or to begin your yoga journey today.</p>
            <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {BRANCHES.map((b) => (
                <div key={b.slug} className="border-t border-royal/20 pt-5">
                  <h3 className="text-2xl">{b.city}</h3>
                  <p className="mt-3 flex gap-2.5 text-[0.95rem] text-ink/75"><MapPin size={17} className="mt-1 shrink-0 text-royal" />{b.address}</p>
                  <a href={`tel:+91${b.phone}`} className="mt-2 flex items-center gap-2.5 font-semibold text-royal hover:text-royal-deep"><Phone size={17} /> {b.phone}</a>
                  <a href={b.map} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-flame-deep underline underline-offset-4">Open in Maps</a>
                </div>
              ))}
            </div>
          </div>
          <div className="self-start rounded-3xl bg-white p-7 shadow-[0_24px_50px_-30px_rgb(42_11_77/0.6)] sm:p-10">
            <h2 className="text-3xl">Send us your details</h2>
            <p className="mb-7 mt-2 text-ink/70">Pick a course and we will get back to you.</p>
            <EnquireForm />
          </div>
        </div>
      </section>
    </>
  );
}
