import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { specialists } from "@/data/specialists";
import { cn } from "@/lib/utils";

export default function Specialists() {
  return (
    <section id="specialists" aria-labelledby="spec-title" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="spec-title" title="Meet Our Specialists." description="Profil demo: nama dan peran di bawah ini fiktif untuk keperluan portofolio." />
        </Reveal>
        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {specialists.map((s, i) => (
            <li key={s.name} className={cn(i === 1 && "md:mt-14")}>
              <Reveal delay={i * 0.08}>
                <Photo image={s.image} sizes="(min-width: 768px) 30vw, 90vw" className="aspect-[4/5] w-full" />
                <h3 className="mt-6 text-3xl">{s.name}</h3>
                <p className="mt-1 text-sm font-medium text-brown">{s.role} · Profil demo</p>
                <p className="mt-3 text-brown">{s.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
