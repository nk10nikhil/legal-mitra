import { Code2, Container, Workflow } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";

export default function DevelopersPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Developers"
        description="A scalable Turborepo foundation with shared packages, frontend-first architecture, and production-ready workflows for future AI, blockchain and legal services."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard icon={Workflow} title="Turborepo + pnpm" description="Fast monorepo task orchestration and dependency management." />
        <FeatureCard icon={Code2} title="Type-Safe Frontend" description="Next.js 15 App Router, TypeScript, Tailwind, Zustand and shadcn-compatible UI." />
        <FeatureCard icon={Container} title="Deployment Ready" description="Dockerfile-based builds and modular service-ready repository layout." />
      </div>
    </div>
  );
}
