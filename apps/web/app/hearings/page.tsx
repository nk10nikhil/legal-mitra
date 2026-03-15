"use client";

import { useQuery } from "@tanstack/react-query";
import { PageHero } from "@/components/page-hero";
import { apiClient } from "@/lib/api-client";

export default function HearingsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["hearings", "sample"],
    queryFn: async () => {
      const response = await apiClient.get("/hearings/case/sample-case-id");
      return response.data.data ?? response.data;
    },
  });

  return (
    <div className="space-y-8">
      <PageHero title="Hearings" description="Schedule and monitor hearings across cases." />
      <div className="rounded-2xl border bg-card/80 p-6">
        {isLoading ? <p>Loading hearings...</p> : <pre className="overflow-auto text-xs">{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}
