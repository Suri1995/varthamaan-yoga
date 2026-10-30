"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { COURSES } from "@/data/courses";
import { BRANCHES, SITE } from "@/data/site";
import { EnquireButton } from "./Enquiry";

const simple = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];
const tail = [
  { href: "/online-classes", label: "Online Classes" },
  { href: "/offline-classes", label: "Offline Classes" },
  { href: "/contact", label: "Contact" },
];

function Dropdown({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  const active = usePathname().startsWith(href);
  return (
    <div className="group relative">
      <Link href={href} className={"flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:text-royal " + (active ? "text-royal" : "text-ink/80")}>
        {label}
        <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-royal/10 bg-white p-2 shadow-xl">{children}</div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const link = (href: string) =>
    "rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:text-royal " +
    (path === href ? "text-royal" : "text-ink/80");

  return (
    <header className="sticky top-0 z-50 border-b border-royal/10 bg-paper/90 backdrop-blur-md">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" aria-label="Varthamaan Yoga home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logo} alt="Varthamaan Yoga" className="h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {simple.map((l) => (
            <Link key={l.href} href={l.href} className={link(l.href)}>{l.label}</Link>
          ))}
          <Dropdown label="Courses" href="/courses">
            <Link href="/courses" className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-royal hover:bg-mist">All certificate courses</Link>
            {COURSES.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className="block rounded-xl px-4 py-2.5 text-sm text-ink/85 hover:bg-mist">
                {c.menuTitle}
              </Link>
            ))}
          </Dropdown>
          {tail.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className={link(l.href)}>{l.label}</Link>
          ))}
          <Dropdown label="Branches" href="/branches">
            {BRANCHES.map((b) => (
              <Link key={b.slug} href={`/branches/${b.slug}`} className="block rounded-xl px-4 py-2.5 text-sm text-ink/85 hover:bg-mist">
                <span className="font-semibold">{b.city}</span>
                <span className="text-ink/55">, {b.area}</span>
              </Link>
            ))}
          </Dropdown>
          <Link href="/contact" className={link("/contact")}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <EnquireButton course="" className="btn btn-royal hidden !px-5 !py-2.5 sm:inline-flex">Join now</EnquireButton>
          <button className="rounded-full p-2.5 text-ink lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-paper px-5 pb-12 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="space-y-1">
            {[...simple, { href: "/courses", label: "Courses" }].map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-mist">{l.label}</Link>
            ))}
            <div className="ml-3 border-l-2 border-royal/15 pl-3">
              {COURSES.map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} className="block rounded-lg px-3 py-2 text-[0.97rem] text-ink/75 hover:bg-mist">{c.menuTitle}</Link>
              ))}
            </div>
            {[tail[0], tail[1], { href: "/branches", label: "Branches" }].map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-mist">{l.label}</Link>
            ))}
            <div className="ml-3 border-l-2 border-royal/15 pl-3">
              {BRANCHES.map((b) => (
                <Link key={b.slug} href={`/branches/${b.slug}`} className="block rounded-lg px-3 py-2 text-[0.97rem] text-ink/75 hover:bg-mist">{b.city}</Link>
              ))}
            </div>
            <Link href="/contact" className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-mist">Contact</Link>
          </nav>
          <EnquireButton course="" className="btn btn-royal mt-6 w-full">Join now</EnquireButton>
        </div>
      )}
    </header>
  );
}
