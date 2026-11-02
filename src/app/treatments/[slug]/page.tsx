import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { getTreatment, treatments } from "@/data/treatments";
import { whatsappLink } from "@/data/site";
import { MessageCircle } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  return t ? { title: t.name, description: t.summary } : {};
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <article className="mx-auto grid max-w-page gap-14 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pt-40">
      <div className="lg:col-span-6">
        <p className="text-sm text-brown">Treatment</p>
        <h1 className="mt-3 font-display text-6xl font-light leading-none tracking-tight sm:text-7xl">{t.name}</h1>
        <p className="mt-8 max-w-lg text-xl leading-relaxed text-brown">{t.intro}</p>

        <h2 className="mt-14 text-3xl">Gambaran Alur</h2>
        <ol className="mt-5 space-y-4">
          {t.flow.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="mt-1 font-display text-xl text-brown">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <ul className="mt-10 space-y-2 border-l-2 border-nude pl-5 text-sm text-brown">
          {t.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink(`Halo AURELLE, saya ingin bertanya tentang ${t.name}.`)} external icon={<MessageCircle size={18} aria-hidden="true" />}>
            Tanya via WhatsApp
          </Button>
          <Button href="/#treatments" variant="outline">Kembali ke Treatments</Button>
        </div>
      </div>
      <div className="lg:col-span-5 lg:col-start-8">
        <Photo image={t.image} priority sizes="(min-width: 1024px) 40vw, 90vw" className="aspect-[4/5] w-full rounded-t-[999px]" />
      </div>
    </article>
  );
}
