import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";

export default function Treatments() {
  return (
    <section id="treatments" aria-labelledby="treat-title" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="treat-title" title="Discover Your Skin Journey." description="Empat kategori layanan sebagai titik awal. Pilihan akhir selalu dibahas bersama dalam konsultasi." />
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t, i) => (
            <li key={t.slug} className={cn(i % 2 === 1 && "lg:mt-16")}>
              <Reveal delay={i * 0.06}>
                <Link href={`/treatments/${t.slug}`} className="group block" aria-label={`Learn more: ${t.name}`}>
                  <Photo image={t.image} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" className="aspect-[3/4] w-full rounded-t-[999px]" />
                  <h3 className="mt-6 text-3xl">{t.name}</h3>
                  <p className="mt-2 text-brown">{t.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 border-b border-espresso/40 pb-0.5 text-sm font-medium transition-all group-hover:gap-3 group-hover:border-espresso">
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
