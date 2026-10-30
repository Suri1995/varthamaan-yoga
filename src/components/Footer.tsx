import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Youtube } from "lucide-react";
import { BRANCHES, SITE } from "@/data/site";

export default function Footer() {
  const social = [
    { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
    { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
    { href: SITE.social.youtube, label: "YouTube", Icon: Youtube },
    { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  ];
  return (
    <footer className="bg-royal-deep text-white/80">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        <div>
          <div className="inline-block rounded-2xl bg-white px-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logo} alt="Varthamaan Yoga" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-[0.97rem] text-white/70">
            Research-based yoga teacher training and classes, accredited with Yoga Alliance USA.
          </p>
          <div className="mt-6 flex gap-2">
            {social.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-white/25 p-2.5 transition-colors hover:bg-flame hover:text-royal-deep">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-base font-semibold text-white">Quick links</h3>
          <ul className="space-y-2.5 text-[0.97rem]">
            {[["/", "Home"], ["/about", "About"], ["/courses", "Courses"], ["/online-classes", "Online classes"], ["/offline-classes", "Offline classes"], ["/branches", "Branches"], ["/contact", "Contact"]].map(([h, l]) => (
              <li key={h}><Link href={h} className="hover:text-flame">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-base font-semibold text-white">Our courses</h3>
          <ul className="space-y-2.5 text-[0.97rem]">
            {[["200-hour-yoga-teacher-training", "Yoga TTC Level 1 (RYT 200)"], ["300-hour-yoga-teacher-training", "Yoga TTC Level 2 (RYT 300)"], ["aerial-yoga-teacher-training", "Aerial Yoga TTC"], ["yin-yoga-teacher-training", "Yin Yoga TTC"], ["multi-style-yoga-teacher-training", "Multi Style Yoga TTC"]].map(([s, l]) => (
              <li key={s}><Link href={`/courses/${s}`} className="hover:text-flame">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-base font-semibold text-white">Our locations</h3>
          <ul className="space-y-3 text-[0.97rem]">
            {BRANCHES.map((b) => (
              <li key={b.slug} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <Link href={`/branches/${b.slug}`} className="font-medium text-white hover:text-flame">{b.city}</Link>
                <a href={`tel:+91${b.phone}`} className="flex items-center gap-1.5 text-white/75 hover:text-flame">
                  <Phone size={14} /> {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} Varthamaan Yoga</p>
          <p className="flex gap-5">
            <a href="https://varthamaanyoga.com/privacy-policy/" className="hover:text-flame">Privacy policy</a>
            <a href="https://varthamaanyoga.com/terms-and-conditions/" className="hover:text-flame">Terms and conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
