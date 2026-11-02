import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/#home"
      aria-label="AURELLE Skin & Aesthetic Clinic, ke beranda"
      className={cn("inline-flex flex-col leading-none", tone === "dark" ? "text-espresso" : "text-cream", className)}
    >
      <span className="font-display text-2xl font-medium tracking-[0.3em]">AURELLE</span>
      <span className="mt-1 text-[0.6rem] tracking-[0.22em] opacity-70">SKIN &amp; AESTHETIC CLINIC</span>
    </Link>
  );
}
