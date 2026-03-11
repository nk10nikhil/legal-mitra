import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border bg-card/80 p-8 text-center">
      <h1 className="font-[var(--font-heading)] text-3xl font-semibold">Page Not Found</h1>
      <p className="mt-2 text-sm text-muted-foreground">The requested route does not exist in this build.</p>
      <Button asChild className="mt-5">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
