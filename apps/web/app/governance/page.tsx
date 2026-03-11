import { PageHero } from "@/components/page-hero";

export default function GovernancePage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Governance and Trust"
        description="LegalMitra enforces accountability with AI decision logging, human override tracking, model audit trails, ethical guardrails and blockchain verification for critical legal events."
      />
      <ul className="grid gap-3 rounded-2xl border bg-card/80 p-6 text-sm text-muted-foreground md:grid-cols-2">
        <li>AI recommendation snapshots and override records</li>
        <li>Bias and drift monitoring dashboards</li>
        <li>Super admin oversight controls</li>
        <li>Cryptographic proof and chain-of-custody verification</li>
      </ul>
    </div>
  );
}
