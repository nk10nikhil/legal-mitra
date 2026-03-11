export function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl border bg-card/80 p-6">
      <div className="grid gap-4 md:grid-cols-5">
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm">Identity Layer</div>
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm">Case Lifecycle</div>
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm">AI Intelligence</div>
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm">Blockchain Trust</div>
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm">Governance Layer</div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Modular monolith by default with event-driven pathways and microservice evolution readiness.
      </p>
    </div>
  );
}
