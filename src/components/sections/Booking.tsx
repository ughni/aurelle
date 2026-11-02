import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultWhatsappMessage, site, whatsappLink } from "@/data/site";
import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-champagne py-24 sm:py-32">
      <div className="mx-auto grid max-w-page gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            title="Begin Your Skin Journey."
            description="Mulai dengan memahami kebutuhan kulitmu. Hubungi tim AURELLE untuk informasi dan jadwal konsultasi."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex gap-4"><MapPin size={22} className="mt-1 shrink-0 text-brown" aria-hidden="true" /><span>{site.address}</span></li>
            <li className="flex gap-4"><Clock size={22} className="mt-1 shrink-0 text-brown" aria-hidden="true" /><span>{site.hours}</span></li>
            <li className="flex gap-4"><Phone size={22} className="mt-1 shrink-0 text-brown" aria-hidden="true" /><span>{site.phoneDisplay}</span></li>
            <li className="flex gap-4">
              <Instagram size={22} className="mt-1 shrink-0 text-brown" aria-hidden="true" />
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@aurelle.demo (placeholder)</a>
            </li>
          </ul>
          <div className="mt-10">
            <Button href={whatsappLink(defaultWhatsappMessage)} external icon={<MessageCircle size={18} aria-hidden="true" />}>
              Chat via WhatsApp
            </Button>
          </div>
          <p className="mt-6 text-sm text-brown">Seluruh informasi kontak adalah data demo untuk portofolio, bukan klinik nyata.</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
