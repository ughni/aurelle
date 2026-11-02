import type { Metadata, Viewport } from "next";
import { body, display } from "@/lib/fonts";
import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: `${site.fullName} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: "Perawatan kulit dengan pendekatan personal, teknologi modern, dan perhatian pada setiap detail. (Website demo portofolio)",
    type: "website",
    locale: "id_ID",
    siteName: site.fullName,
    images: [{ url: "/images/hero.svg", width: 900, height: 1125, alt: "AURELLE Skin & Aesthetic Clinic" }],
  },
  twitter: { card: "summary_large_image", title: site.fullName, description: site.tagline },
};

export const viewport: Viewport = { themeColor: "#F8F5F1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-cream"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
