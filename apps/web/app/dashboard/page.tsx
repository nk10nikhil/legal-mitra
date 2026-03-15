import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Dashboard"
        description="Role-aware command center for citizen, lawyer and judge workflows."
      />

      <section>
        <h2 className="mb-3 text-lg font-semibold">Citizen Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <FeatureCard title="My Cases" />
          <FeatureCard title="Upload Evidence" />
          <FeatureCard title="Upcoming Hearings" />
          <FeatureCard title="AI Assistant" />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Lawyer Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard title="Assigned Cases" />
          <FeatureCard title="Evidence Review" />
          <FeatureCard title="Case Notes" />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Judge Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard title="Case Queue" />
          <FeatureCard title="Upcoming Hearings" />
          <FeatureCard title="Decision Tools" />
        </div>
      </section>
    </div>
  );
}
