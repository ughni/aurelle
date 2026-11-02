"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const base = useId();

  return (
    <div className="divide-y divide-espresso/15 border-y border-espresso/15">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-display text-2xl text-espresso sm:text-3xl"
              >
                <span>{item.question}</span>
                <Plus aria-hidden="true" size={22} className={cn("shrink-0 transition-transform duration-300", open && "rotate-45")} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-lg leading-relaxed text-brown">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
