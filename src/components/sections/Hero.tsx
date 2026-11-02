"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { images } from "@/data/images";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };
const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <motion.div
        className="mx-auto grid max-w-page items-end gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-28"
        variants={container}
        initial={reduce ? "show" : "hidden"}
        animate="show"
      >
        <div className="lg:col-span-7 lg:pb-4">
          <motion.p variants={rise} className="text-xs tracking-[0.28em] text-brown">
            PERSONALIZED SKINCARE EXPERIENCE
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={rise}
            className="mt-7 text-[clamp(4rem,11vw,9.5rem)] font-light leading-[0.88] tracking-[-0.02em] text-espresso"
          >
            Reveal Your <span className="italic">Natural</span> Radiance.
          </motion.h1>
          <motion.p variants={rise} className="mt-9 max-w-md text-lg leading-relaxed text-brown sm:text-xl">
            Perawatan kulit yang dirancang dengan pendekatan personal, teknologi modern, dan perhatian pada setiap detail.
          </motion.p>
          <motion.div variants={rise} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/#treatments">Explore Treatments</Button>
            <Button href="/#contact" variant="outline">Book Consultation</Button>
          </motion.div>
        </div>

        <motion.div variants={rise} className="relative lg:col-span-5">
          <Photo
            image={images.hero}
            priority
            sizes="(min-width: 1024px) 38vw, 90vw"
            className="aspect-[4/5] w-full rounded-t-[999px] lg:ml-auto lg:w-[90%]"
          />
          <Photo
            image={images.heroDetail}
            sizes="(min-width: 1024px) 16vw, 38vw"
            className="absolute -bottom-8 left-0 aspect-square w-[40%] border-[6px] border-cream sm:-left-4 lg:-left-12"
          />
          <p className="absolute -top-2 right-0 text-xs tracking-[0.28em] text-brown [writing-mode:vertical-rl] max-lg:hidden">
            MODERN AESTHETIC CLINIC
          </p>
          <p className="mt-12 text-xs tracking-[0.28em] text-brown lg:hidden">MODERN AESTHETIC CLINIC</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
