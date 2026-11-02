import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** Pengganti testimonial: belum ada ulasan pelanggan nyata, jadi tidak ada testimoni yang ditampilkan. */
const commitments = [
  { title: "Penjelasan yang jelas", text: "Setiap pilihan perawatan dijelaskan dengan bahasa yang mudah dipahami, termasuk batasannya." },
  { title: "Tanpa janji berlebihan", text: "Kami tidak menjanjikan hasil pasti. Respons kulit setiap orang berbeda." },
  { title: "Keputusan di tanganmu", text: "Konsultasi tidak mewajibkan treatment. Kamu menentukan langkah berikutnya." },
];

export default function Commitment() {
  return (
    <section aria-labelledby="commit-title" className="bg-espresso py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="commit-title" tone="light" title="Our Commitment." description="Testimoni pelanggan akan ditampilkan di sini setelah ada ulasan yang nyata dan diizinkan untuk dipublikasikan." />
        </Reveal>
        <ul className="mt-16 grid gap-10 border-t border-cream/20 pt-10 md:grid-cols-3 md:gap-12">
          {commitments.map((c) => (
            <li key={c.title}>
              <Reveal>
                <h3 className="text-3xl">{c.title}</h3>
                <p className="mt-3 text-cream/75">{c.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
