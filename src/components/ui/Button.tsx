import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-espresso text-cream hover:bg-brown",
  outline: "border border-espresso/60 text-espresso hover:bg-espresso hover:text-cream",
  light: "bg-cream text-espresso hover:bg-champagne",
};

type Props = { href: string; children: ReactNode; variant?: Variant; external?: boolean; className?: string; icon?: ReactNode };

export default function Button({ href, children, variant = "primary", external, className, icon }: Props) {
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 text-[0.95rem] font-medium tracking-wide",
    "transition-colors duration-300 active:scale-[0.98]",
    styles[variant],
    className,
  );
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
