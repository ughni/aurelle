import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-page gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading id="faq-title" title="Frequently Asked Questions." description="Informasi umum. Untuk kebutuhan kulit spesifik, tetap konsultasikan dengan tim profesional." />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
