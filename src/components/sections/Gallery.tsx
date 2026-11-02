import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import type { SiteImage } from "@/data/images";

type Tile = { image: SiteImage; caption: string; span: string };

// Grid 12 kolom x 5 baris di desktop, 2 kolom di mobile; tersusun rapat tanpa celah.
const tiles: Tile[] = [
  { image: images.galleryInterior, caption: "Interior klinik", span: "col-span-2 row-span-2 md:col-span-5 md:row-span-5" },
  { image: images.galleryConsult, caption: "Ruang konsultasi", span: "row-span-2 md:col-span-4 md:row-span-3" },
  { image: images.galleryProducts, caption: "Detail produk skincare", span: "md:col-span-3 md:row-span-2" },
  { image: images.galleryTreatment, caption: "Ruang treatment", span: "row-span-2 md:col-span-3 md:row-span-3" },
  { image: images.galleryReception, caption: "Reception area", span: "md:col-span-4 md:row-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading id="gallery-title" title="An Experience Designed Around You." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:auto-rows-[120px] md:grid-cols-12 md:gap-4 lg:auto-rows-[130px]">
            {tiles.map((t) => (
              <Photo key={t.caption} image={t.image} sizes="(min-width: 768px) 40vw, 50vw" className={t.span}>
                <span className="absolute inset-x-0 bottom-0 bg-espresso/75 px-4 py-3 text-sm text-cream opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                  {t.caption}
                </span>
              </Photo>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
