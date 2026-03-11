import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About LegalMitra"
        description="LegalMitra is a nation-scale digital justice operating system designed to modernize legal access and governance accountability while preserving human judicial authority."
      />
      <div className="rounded-2xl border bg-card/80 p-6 text-sm text-muted-foreground leading-7">
        LegalMitra is built around three core commitments: AI-assisted intelligence, human-supervised decision-making, and blockchain-secured trust. It is designed for citizens, lawyers, judges, police, corporates, arbitration bodies, and government institutions.
      </div>
    </div>
  );
}
