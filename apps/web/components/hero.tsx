"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-card/80 px-6 py-14 shadow-sm sm:px-8 md:px-12 md:py-20">
      <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -left-24 bottom-4 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl"
      >
        <p className="mb-4 inline-flex rounded-full border bg-secondary/70 px-3 py-1 text-xs font-medium text-muted-foreground">
          Official Product Website and Documentation Hub
        </p>
        <h1 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
