/** Seluruh data bisnis di bawah ini adalah DATA DEMO untuk portofolio, bukan klinik nyata. */
export const site = {
  name: "AURELLE",
  fullName: "AURELLE Skin & Aesthetic Clinic",
  tagline: "Your Skin, Your Confidence.",
  description:
    "AURELLE Skin & Aesthetic Clinic adalah klinik kecantikan fiktif (demo portofolio) dengan pendekatan perawatan kulit yang personal dan profesional.",
  address: "Jl. Contoh Raya No. 12, Jakarta Selatan (alamat demo)",
  hours: "Senin–Sabtu, 10.00–20.00 WIB (jam demo)",
  phoneDisplay: "+62 812-0000-0000 (demo)",
  email: "halo@aurelle.example",
} as const;

/** Nomor WhatsApp bisa diatur lewat NEXT_PUBLIC_WHATSAPP_NUMBER (format 62812xxxxxxx, tanpa + atau spasi). */
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281200000000";

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage = "Halo AURELLE, saya ingin menjadwalkan konsultasi.";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Specialists", href: "/#specialists" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
] as const;
