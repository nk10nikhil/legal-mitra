type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm text-muted-foreground md:text-base">{description}</p> : null}
    </div>
  );
}
