"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { PageHero } from "@/components/page-hero";
import { apiClient } from "@/lib/api-client";

export default function CaseDetailsPage() {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["case", params.id],
    queryFn: async () => {
      const response = await apiClient.get(`/cases/${params.id}`);
      return response.data.data ?? response.data;
    },
    enabled: Boolean(params.id),
  });

  return (
    <div className="space-y-8">
      <PageHero title="Case Details" description="Detailed case timeline and metadata." />
      <div className="rounded-2xl border bg-card/80 p-6">
        {isLoading ? <p>Loading...</p> : <pre className="overflow-auto text-xs">{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}
