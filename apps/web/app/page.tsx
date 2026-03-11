import Link from "next/link";
import { ArrowRight, Blocks, Bot, Landmark, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { PrinciplesGrid } from "@/components/principles-grid";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { UsersGrid } from "@/components/users-grid";
import {
  aiCapabilities,
  architectureHighlights,
  evidenceTrustPoints,
  justiceGridVision,
  platformPrinciples,
  targetUsers,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero
        title="India's AI-Assisted, Blockchain-Secured Digital Justice Infrastructure"
        subtitle="LegalMitra is a nation-scale legal operating system designed for citizens, legal professionals and institutions with AI intelligence, human supervision and cryptographic trust."
        primaryCta={{ label: "Explore Platform", href: "/platform" }}
        secondaryCta={{ label: "Read Architecture", href: "/architecture" }}
      />

      <section>
        <SectionHeader
          eyebrow="Platform Overview"
          title="A Production-Grade Foundation For Digital Justice"
          description="LegalMitra modernizes legal access, judicial workflows, evidence integrity and governance transparency in one modular ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {architectureHighlights.map((highlight) => (
            <FeatureCard key={highlight} title={highlight} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Core Principles"
          title="Built For Assistive Justice"
          description="The platform aligns advanced AI, human authority and tamper-evident security into one legal workflow model."
        />
        <PrinciplesGrid principles={platformPrinciples} />
      </section>

      <section>
        <SectionHeader
          eyebrow="Target Users"
          title="Role-Aware By Design"
          description="From citizens to judges and compliance teams, every user receives a context-specific and auditable experience."
        />
        <UsersGrid users={targetUsers} />
      </section>

      <section>
        <SectionHeader
          eyebrow="Architecture Overview"
          title="How LegalMitra Works"
          description="A modular monolith today, microservice-ready tomorrow, with AI and blockchain layers integrated at critical trust boundaries."
        />
        <Timeline />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={Bot}
          title="AI Intelligence Layer"
          description={aiCapabilities.join(". ") + "."}
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Evidence Trust Framework"
          description={evidenceTrustPoints.join(". ") + "."}
        />
        <FeatureCard
          icon={Landmark}
          title="National Justice Grid"
          description={justiceGridVision}
        />
      </section>

      <section className="rounded-3xl border bg-card/80 p-8 shadow-sm md:p-10">
        <SectionHeader
          eyebrow="Governance and Trust"
          title="AI Recommendations, Human Decisions"
          description="LegalMitra logs AI recommendations, override records and final decisions with auditable governance controls for institutional trust."
        />
        <Link
          href="/governance"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          Explore Governance Layer
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <CTASection
        title="Build The Future Legal Infrastructure"
        description="Use LegalMitra as the trusted digital justice backbone for courts, legal institutions and governance ecosystems across India."
        cta={{ label: "Read Documentation", href: "/documentation", icon: Blocks }}
      />
    </div>
  );
}
