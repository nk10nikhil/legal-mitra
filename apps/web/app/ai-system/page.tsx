import { Bot, BrainCircuit, Scale } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";

export default function AISystemPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="AI Legal Intelligence System"
        description="LegalMitra AI supports legal Q&A, judgment summarization, predictive analysis, fairness monitoring and explainable legal reasoning without replacing judicial authority."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard icon={Bot} title="Assistive AI" description="Chat-based legal guidance and retrieval-augmented legal intelligence." />
        <FeatureCard icon={BrainCircuit} title="Reasoning Graphs" description="Evidence -> law -> precedent -> reasoning -> verdict pathways." />
        <FeatureCard icon={Scale} title="Human Override" description="AI recommendations remain fully auditable and judge-controlled." />
      </div>
    </div>
  );
}
