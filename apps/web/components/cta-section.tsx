import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    icon?: LucideIcon;
  };
};

export function CTASection({ title, description, cta }: CTASectionProps) {
  const Icon = cta.icon ?? ArrowRight;

  return (
    <section className="rounded-3xl border bg-card/85 p-8 shadow-sm md:p-10">
      <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
      <Button asChild className="mt-6 gap-2">
        <Link href={cta.href}>
          {cta.label}
          <Icon className="h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
