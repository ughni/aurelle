/**
 * Semua gambar dikelola di sini. Saat ini memakai ilustrasi SVG di /public/images.
 * Untuk foto asli: taruh file (mis. hero.jpg) di public/images lalu ganti ekstensi `src`.
 */
export type SiteImage = { src: string; alt: string };

const img = (name: string, alt: string, ext: string = "svg"): SiteImage => ({ 
  src: `/images/${name}.${ext}`, 
  alt 
});

export const images = {
  hero: img("foto1", "Potret perawatan kulit dengan pencahayaan natural","jpg"),
  heroDetail: img("hero-detail", "Deretan produk skincare di atas rak marmer"),
  about: img("about", "Area tunggu klinik dengan sofa dan lengkungan arsitektural"),
  aboutDetail: img("about-detail", "Tekstur kulit yang lembut dalam nuansa champagne"),
  treatFacial: img("treat-facial", "Ilustrasi perawatan wajah"),
  treatRejuv: img("treat-rejuv", "Tekstur kulit lembut untuk layanan peremajaan"),
  treatAcne: img("treat-acne", "Produk perawatan kulit berjerawat"),
  treatConsult: img("treat-consult", "Ruang konsultasi dengan dua kursi dan meja kecil"),
  why: img("why", "Ruang treatment yang tenang dengan lampu hangat"),
  spec1: img("spec-1", "Ilustrasi profil spesialis demo pertama"),
  spec2: img("spec-2", "Ilustrasi profil spesialis demo kedua"),
  spec3: img("spec-3", "Ilustrasi profil spesialis demo ketiga"),
  galleryInterior: img("gallery-interior", "Interior klinik dengan sofa dan jendela lengkung"),
  galleryConsult: img("gallery-consult", "Ruang konsultasi"),
  galleryTreatment: img("gallery-treatment", "Ruang treatment dengan tempat tidur perawatan"),
  galleryReception: img("gallery-reception", "Area resepsionis dengan lampu gantung"),
  galleryProducts: img("gallery-products", "Detail produk skincare"),
} satisfies Record<string, SiteImage>;
