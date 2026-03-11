type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="mb-10 rounded-3xl border bg-card/85 p-8 md:p-10">
      <h1 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
    </section>
  );
}
