import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";

const features = [
  "Case Lifecycle Management",
  "Document and Evidence Intelligence",
  "Hearing and Virtual Courtroom System",
  "Online Dispute Resolution",
  "Corporate and Compliance System",
  "Public Grievance and Whistleblower System",
];

export default function PlatformPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Platform"
        description="A unified digital justice platform covering legal workflows from onboarding and case tracking to dispute resolution, governance and analytics."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature} title={feature} />
        ))}
      </div>
    </div>
  );
}
