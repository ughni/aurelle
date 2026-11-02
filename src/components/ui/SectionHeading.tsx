import { cn } from "@/lib/utils";

type Props = { id?: string; title: string; description?: string; tone?: "dark" | "light"; className?: string };

export default function SectionHeading({ id, title, description, tone = "dark", className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2
        id={id}
        className={cn(
          "font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
          tone === "dark" ? "text-espresso" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-6 max-w-xl text-lg leading-relaxed", tone === "dark" ? "text-brown" : "text-cream/75")}>{description}</p>
      ) : null}
    </div>
  );
}
