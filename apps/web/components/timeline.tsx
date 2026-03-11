const phases = [
  {
    title: "Identity and Access Layer",
    description: "Verified onboarding, JWT auth, RBAC and role-aware legal dashboards.",
  },
  {
    title: "Case and Evidence Lifecycle",
    description: "Case tracking, hearing workflows, evidence hashing and chain-of-custody logs.",
  },
  {
    title: "AI-Assisted Intelligence",
    description: "Legal research, summarization, prediction, explainability and fairness monitoring.",
  },
  {
    title: "Governance and National Scale",
    description: "Auditability, blockchain anchoring and multi-state rollout toward a National Justice Grid.",
  },
];

export function Timeline() {
  return (
    <ol className="space-y-4">
      {phases.map((phase, index) => (
        <li key={phase.title} className="grid gap-3 rounded-2xl border bg-card/80 p-5 md:grid-cols-[40px_1fr]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {index + 1}
          </div>
          <div>
            <h3 className="font-semibold">{phase.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{phase.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
