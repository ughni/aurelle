"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { whatsappLink } from "@/data/site";
import { treatments } from "@/data/treatments";

const schema = z.object({
  name: z.string().trim().min(2, "Masukkan nama minimal 2 karakter."),
  interest: z.string().min(1, "Pilih salah satu layanan."),
  time: z.string().min(1, "Pilih waktu yang kamu inginkan."),
  note: z.string().max(300, "Catatan maksimal 300 karakter."),
});
type Values = z.infer<typeof schema>;

const times = ["Pagi (10.00–12.00)", "Siang (12.00–15.00)", "Sore (15.00–20.00)", "Fleksibel"];
const field = "mt-2 w-full rounded-xl border border-espresso/25 bg-cream px-4 py-3 text-espresso placeholder:text-brown/70";

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", interest: "", time: "", note: "" } });

  const onSubmit = (v: Values) => {
    const lines = [
      "Halo AURELLE, saya ingin menjadwalkan konsultasi.",
      `Nama: ${v.name}`,
      `Layanan: ${v.interest}`,
      `Waktu: ${v.time}`,
      v.note ? `Catatan: ${v.note}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 bg-surface p-6 sm:p-10">
      <div>
        <label htmlFor="name" className="font-medium">Nama</label>
        <input id="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} {...register("name")} />
        {errors.name ? <p id="name-err" className="mt-1 text-sm text-brown" role="alert">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="interest" className="font-medium">Layanan yang diminati</label>
        <select id="interest" className={field} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-err" : undefined} {...register("interest")}>
          <option value="">Pilih layanan</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.name}>{t.name}</option>
          ))}
          <option value="Belum tahu, ingin konsultasi dulu">Belum tahu, ingin konsultasi dulu</option>
        </select>
        {errors.interest ? <p id="interest-err" className="mt-1 text-sm text-brown" role="alert">{errors.interest.message}</p> : null}
      </div>
      <div>
        <label htmlFor="time" className="font-medium">Waktu yang diinginkan</label>
        <select id="time" className={field} aria-invalid={!!errors.time} aria-describedby={errors.time ? "time-err" : undefined} {...register("time")}>
          <option value="">Pilih waktu</option>
          {times.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.time ? <p id="time-err" className="mt-1 text-sm text-brown" role="alert">{errors.time.message}</p> : null}
      </div>
      <div>
        <label htmlFor="note" className="font-medium">Catatan (opsional)</label>
        <textarea id="note" rows={3} className={field} aria-invalid={!!errors.note} {...register("note")} />
        {errors.note ? <p className="mt-1 text-sm text-brown" role="alert">{errors.note.message}</p> : null}
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-espresso px-8 font-medium text-cream transition-colors hover:bg-brown"
      >
        <MessageCircle size={18} aria-hidden="true" /> Lanjutkan ke WhatsApp
      </button>
      <p className="text-sm text-brown" aria-live="polite">
        {sent
          ? "WhatsApp dibuka di tab baru. Kirim pesannya dari sana untuk menghubungi tim."
          : "Formulir ini tidak menyimpan data apa pun. Pesan hanya disiapkan, lalu kamu kirim sendiri lewat WhatsApp."}
      </p>
    </form>
  );
}
