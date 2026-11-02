import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

const values = [
  { title: "Personalized Care", text: "Setiap sesi dimulai dari kebutuhan kulitmu, bukan dari paket yang sudah ditentukan." },
  { title: "Professional Approach", text: "Penjelasan yang jelas dan jujur tentang pilihan perawatan beserta pertimbangannya." },
  { title: "Comfortable Experience", text: "Ruang yang tenang dan tidak terburu-buru, dari kedatangan hingga selesai." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-page items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="relative pb-16 lg:col-span-5">
          <Reveal>
            <Photo image={images.about} sizes="(min-width: 1024px) 40vw, 85vw" className="aspect-[4/5] w-[84%]" />
          </Reveal>
          <Reveal delay={0.15} className="absolute bottom-0 right-0 w-[44%]">
            <Photo image={images.aboutDetail} sizes="(min-width: 1024px) 18vw, 40vw" className="aspect-square w-full rounded-full" />
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading
              id="about-title"
              title="Beauty Begins with Understanding Your Skin."
              description="Kami percaya setiap kulit memiliki karakter dan kebutuhan yang berbeda. Karena itu, setiap pengalaman perawatan di AURELLE dimulai dengan memahami kebutuhan kulit secara personal."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-12 divide-y divide-espresso/15 border-y border-espresso/15">
              {values.map((v) => (
                <div key={v.title} className="grid gap-2 py-6 sm:grid-cols-5 sm:gap-6">
                  <dt className="font-display text-2xl sm:col-span-2">{v.title}</dt>
                  <dd className="text-brown sm:col-span-3">{v.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
