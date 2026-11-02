import { images, type SiteImage } from "./images";

export type Treatment = {
  slug: string;
  name: string;
  summary: string;
  image: SiteImage;
  intro: string;
  flow: string[];
  notes: string[];
};

const disclaimer =
  "Informasi ini bersifat umum dan tidak menggantikan konsultasi profesional. Hasil dan kesesuaian perawatan berbeda untuk setiap orang.";

export const treatments: Treatment[] = [
  {
    slug: "facial-treatment",
    name: "Facial Treatment",
    summary: "Perawatan wajah untuk membantu menjaga kebersihan dan kenyamanan kulit.",
    image: images.treatFacial,
    intro: "Perawatan wajah yang disesuaikan dengan kondisi dan kenyamanan kulitmu pada hari itu.",
    flow: ["Diskusi singkat tentang kebutuhan dan kebiasaan perawatan kulit.", "Pembersihan dan perawatan sesuai pilihan yang disepakati.", "Saran perawatan rutin di rumah."],
    notes: [disclaimer],
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    summary: "Layanan perawatan yang berfokus pada peremajaan dan perawatan tampilan kulit.",
    image: images.treatRejuv,
    intro: "Layanan yang berfokus pada perawatan tampilan kulit agar terasa lebih segar dan terawat.",
    flow: ["Konsultasi untuk memahami harapan dan kondisi kulit.", "Penjelasan pilihan perawatan beserta pertimbangannya.", "Pelaksanaan perawatan dan panduan setelahnya."],
    notes: [disclaimer, "Tidak ada jaminan hasil tertentu."],
  },
  {
    slug: "acne-care",
    name: "Acne Care",
    summary: "Pendekatan perawatan kulit yang memiliki kecenderungan berjerawat.",
    image: images.treatAcne,
    intro: "Pendekatan perawatan yang memperhatikan kebutuhan kulit dengan kecenderungan berjerawat.",
    flow: ["Pembahasan kondisi kulit dan rutinitas yang sedang dijalani.", "Rekomendasi perawatan yang sesuai kebutuhan.", "Panduan perawatan lanjutan di rumah."],
    notes: [disclaimer, "Tidak menjanjikan kesembuhan."],
  },
  {
    slug: "skin-consultation",
    name: "Skin Consultation",
    summary: "Konsultasi untuk memahami kondisi dan kebutuhan kulit.",
    image: images.treatConsult,
    intro: "Titik awal terbaik: ngobrol dulu untuk memahami kulitmu sebelum memilih perawatan apa pun.",
    flow: ["Bercerita tentang kebiasaan dan kekhawatiran kulitmu.", "Pemeriksaan visual dan diskusi kebutuhan.", "Rekomendasi langkah berikutnya, tanpa kewajiban mengambil treatment."],
    notes: [disclaimer],
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
