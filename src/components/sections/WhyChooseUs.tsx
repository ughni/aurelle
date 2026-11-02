import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

const points = [
  { title: "Personalized Approach", text: "Setiap pelanggan memiliki kebutuhan kulit yang berbeda." },
  { title: "Professional Consultation", text: "Pendekatan konsultasi yang mengutamakan pemahaman kebutuhan pelanggan." },
  { title: "Comfortable Environment", text: "Lingkungan klinik yang dirancang nyaman dan menenangkan." },
  { title: "Modern Experience", text: "Pengalaman layanan dengan pendekatan modern." },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-page gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6 lg:pt-10">
          <Reveal>
            <SectionHeading id="why-title" title="Care That Goes Beyond Skincare." />
          </Reveal>
          <ul className="mt-14 space-y-10">
            {points.map((p, i) => (
              <li key={p.title} className={i % 2 === 1 ? "lg:ml-14" : undefined}>
                <Reveal>
                  <h3 className="text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-sm text-brown">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <Photo image={images.why} sizes="(min-width: 1024px) 40vw, 90vw" className="aspect-[4/5] w-full lg:sticky lg:top-28" />
        </Reveal>
      </div>
    </section>
  );
}
