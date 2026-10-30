import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] [animation:pulse-ring_2.4s_ease-out_infinite]" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
