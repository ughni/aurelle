import { images, type SiteImage } from "./images";

/** PROFIL DEMO: nama dan peran fiktif, bukan tenaga medis berlisensi. */
export type Specialist = { name: string; role: string; bio: string; image: SiteImage };

export const specialists: Specialist[] = [
  {
    name: "Nadia Prameswari",
    role: "Lead Skin Consultant",
    bio: "Memandu sesi konsultasi dengan pendekatan mendengarkan lebih dulu sebelum merekomendasikan apa pun.",
    image: images.spec1,
  },
  {
    name: "Raka Mahendra",
    role: "Aesthetic Therapist",
    bio: "Fokus pada kenyamanan pelanggan selama perawatan dan penjelasan setiap langkahnya.",
    image: images.spec2,
  },
  {
    name: "Salsa Anindya",
    role: "Client Care Coordinator",
    bio: "Membantu jadwal, pertanyaan awal, dan memastikan setiap kunjungan berjalan lancar.",
    image: images.spec3,
  },
];
