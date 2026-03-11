import { Brain, Scale, Shield } from "lucide-react";

const principleIcons = [Brain, Scale, Shield];

type PrinciplesGridProps = {
  principles: string[];
};

export function PrinciplesGrid({ principles }: PrinciplesGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {principles.map((principle, index) => {
        const Icon = principleIcons[index] ?? Shield;
        return (
          <div key={principle} className="rounded-2xl border bg-card/80 p-5">
            <Icon className="mb-3 h-5 w-5 text-primary" />
            <p className="font-medium">{principle}</p>
          </div>
        );
      })}
    </div>
  );
}
