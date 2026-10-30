"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";
import { COURSES } from "@/data/courses";
import { SITE } from "@/data/site";

type Ctx = { open: (course?: string) => void };
const EnquiryCtx = createContext<Ctx>({ open: () => {} });
export const useEnquiry = () => useContext(EnquiryCtx);

export function EnquiryForm({
  defaultCourse = "",
  tone = "light",
  onDone,
}: {
  defaultCourse?: string;
  tone?: "light" | "dark";
  onDone?: () => void;
}) {
  const [course, setCourse] = useState(defaultCourse);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => setCourse(defaultCourse), [defaultCourse]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("Enter your name.");
    if (!/^[0-9+\-\s]{10,15}$/.test(mobile.trim())) return setError("Enter a valid mobile number.");
    setError("");
    const text = [
      "Hi Varthamaan Yoga, I would like to join a class.",
      course ? `Course: ${course}` : null,
      `Name: ${name.trim()}`,
      `Mobile: ${mobile.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    onDone?.();
  };

  const field =
    "w-full rounded-xl border bg-white px-4 py-3 text-[0.97rem] text-ink placeholder:text-ink/45 focus:border-royal focus:outline-none " +
    (tone === "dark" ? "border-white/20" : "border-royal/20");
  const label = "mb-1.5 block text-sm font-medium " + (tone === "dark" ? "text-white/85" : "text-ink/80");

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div>
        <label className={label} htmlFor="enq-course">Course</label>
        <select id="enq-course" className={field} value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.title}>{c.title}</option>
          ))}
          <option value="Online yoga classes">Online yoga classes</option>
          <option value="Offline yoga classes">Offline yoga classes</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="enq-name">Full name</label>
          <input id="enq-name" className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="enq-mobile">Mobile</label>
          <input id="enq-mobile" className={field} inputMode="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} autoComplete="tel" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="enq-email">Email (optional)</label>
        <input id="enq-email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      </div>
      {error && <p role="alert" className={"text-sm " + (tone === "dark" ? "text-flame" : "text-lotus")}>{error}</p>}
      <button type="submit" className="btn btn-flame w-full sm:w-auto">Send on WhatsApp</button>
      <p className={"text-sm " + (tone === "dark" ? "text-white/65" : "text-ink/60")}>
        Opens WhatsApp with your details so the admissions team can reply directly.
      </p>
    </form>
  );
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [course, setCourse] = useState("");

  const open = useCallback((c?: string) => {
    setCourse(c ?? "");
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <EnquiryCtx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-royal-deep/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enq-title"
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-paper p-7 shadow-2xl sm:rounded-3xl sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-ink/60 hover:bg-mist">
              <X size={20} />
            </button>
            <h2 id="enq-title" className="text-2xl sm:text-3xl">Join a class today</h2>
            <p className="mb-6 mt-2 text-ink/70">Tell us which course you want and we will call you back.</p>
            <EnquiryForm defaultCourse={course} onDone={() => setOpen(false)} />
          </div>
        </div>
      )}
    </EnquiryCtx.Provider>
  );
}

export function EnquireButton({
  course,
  children = "Enroll now",
  className = "btn btn-flame",
}: {
  course?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { open } = useEnquiry();
  return (
    <button type="button" onClick={() => open(course)} className={className}>
      {children}
    </button>
  );
}
