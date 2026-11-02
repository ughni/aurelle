# AURELLE Skin & Aesthetic Clinic — Landing Page (Demo Portofolio)

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React · React Hook Form + Zod.

## Menjalankan di VS Code
```bash
npm install
cp .env.example .env.local   # opsional: atur nomor WhatsApp & domain
npm run dev                  # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```
Butuh internet saat `dev`/`build` pertama karena font Google (Cormorant Garamond, DM Sans) diunduh via `next/font`.

## Konfigurasi
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: nomor untuk semua tombol WhatsApp (format `62812xxxxxxx`).
- `NEXT_PUBLIC_SITE_URL`: domain produksi untuk metadata Open Graph.

## Mengganti gambar
Gambar sekarang berupa ilustrasi SVG di `public/images` (dibuat `scripts/make_images.py`). Untuk foto asli, simpan `.jpg` dengan nama sama lalu ubah ekstensi di `src/data/images.ts`.

## Catatan konten
- Semua data bisnis, profil spesialis, dan kontak adalah data demo.
- Section testimoni diganti "Our Commitment" karena belum ada ulasan nyata.
- Form booking tidak menyimpan data; hanya menyiapkan pesan WhatsApp.
