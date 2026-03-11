import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon = Sparkles }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border bg-card/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Icon className="mb-4 h-5 w-5 text-primary" />
      <h3 className="text-sm font-semibold md:text-base">{title}</h3>
      {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}
    </article>
  );
}
