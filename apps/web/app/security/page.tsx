import { LockKeyhole, ShieldCheck, ShieldEllipsis } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Security and Compliance"
        description="Institutional-grade safeguards including JWT authentication, RBAC, encryption, strict access controls, immutable audit trails and blockchain-backed integrity proofs."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard icon={LockKeyhole} title="Access Security" description="Role-aware authentication, authorization and anomaly detection." />
        <FeatureCard icon={ShieldCheck} title="Evidence Integrity" description="SHA-256 hashing, timestamping and proof verification APIs." />
        <FeatureCard icon={ShieldEllipsis} title="Compliance Ready" description="Audit logging, data sovereignty alignment and governance control." />
      </div>
    </div>
  );
}
