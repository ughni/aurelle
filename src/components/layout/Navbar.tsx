"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b border-espresso/10 bg-cream/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-9 xl:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="relative text-[0.95rem] text-espresso after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brown after:transition-transform after:duration-300 hover:after:scale-x-100">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href="/#contact" className="hidden min-h-11 px-6 sm:inline-flex">
            Book Consultation
          </Button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-espresso xl:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-cream xl:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col px-5 pt-6 sm:px-8">
              {navLinks.map((l) => (
                <li key={l.href} className="border-b border-espresso/10">
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-5 font-display text-3xl text-espresso">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pt-8 sm:px-8">
              <Button href="/#contact" className="w-full" >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
