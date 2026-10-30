import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EnquiryProvider } from "@/components/Enquiry";
import AutoReveal from "@/components/AutoReveal";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: { default: "Varthamaan Yoga | Yoga Teacher Training and Classes", template: "%s | Varthamaan Yoga" },
  description:
    "Join our comprehensive yoga training to enhance flexibility, strength, and mindfulness. Yoga Alliance accredited teacher training and classes in Hyderabad, Khammam, Warangal and Guntur.",
  icons: { icon: "https://varthamaanyoga.com/wp-content/uploads/2025/02/Artboard-3-1-300x300.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-flame focus:px-4 focus:py-2 focus:text-royal-deep">
          Skip to content
        </a>
        <ScrollProgress />
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <AutoReveal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
