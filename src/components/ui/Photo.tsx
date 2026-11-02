import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

type Props = {
  image: SiteImage;
  /** Kelas rasio dari pemanggil, mis. "aspect-[4/5]", supaya tidak ada layout shift. */
  className?: string;
  sizes: string;
  priority?: boolean;
  zoom?: boolean;
  children?: ReactNode;
};

export default function Photo({ image, className, sizes, priority, zoom = true, children }: Props) {
  return (
    <div className={cn("group relative overflow-hidden bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", zoom && "transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]")}
      />
      {children}
    </div>
  );
}
