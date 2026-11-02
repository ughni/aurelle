import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navLinks, site } from "@/data/site";
import { treatments } from "@/data/treatments";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed">
            Klinik kecantikan fiktif dengan pendekatan personal dan profesional. Website ini adalah demo portofolio.
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (placeholder)"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-nude hover:text-nude"
          >
            <Instagram size={18} />
          </a>
        </div>

        <nav aria-label="Navigasi footer" className="md:col-span-2">
          <h2 className="font-display text-2xl text-cream">Navigasi</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-nude">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kategori treatment" className="md:col-span-3">
          <h2 className="font-display text-2xl text-cream">Treatments</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link href={`/treatments/${t.slug}`} className="transition-colors hover:text-nude">{t.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display text-2xl text-cream">Kontak (demo)</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-nude" aria-hidden="true" />{site.address}</li>
            <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-nude" aria-hidden="true" />{site.phoneDisplay}</li>
            <li className="flex gap-3"><Mail size={18} className="mt-1 shrink-0 text-nude" aria-hidden="true" />{site.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-page px-5 py-6 text-sm text-cream/60 sm:px-8 lg:px-12">
          © {new Date().getFullYear()} AURELLE Skin &amp; Aesthetic Clinic. Seluruh data bisnis, profil, dan konten adalah fiktif untuk keperluan portofolio.
        </p>
      </div>
    </footer>
  );
}
