import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Architecture"
        description="LegalMitra starts as a modular monolith and evolves toward event-driven, distributed services while preserving strict governance and auditability."
      />
      <ArchitectureDiagram />
      <Timeline />
    </div>
  );
}
