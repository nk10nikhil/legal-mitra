"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { PageHero } from "@/components/page-hero";
import { apiClient } from "@/lib/api-client";

type CaseListItem = {
  id: string;
  title: string;
  status: string;
};

export default function CasesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const response = await apiClient.get("/cases");
      return response.data.data ?? response.data;
    },
  });

  const cases: CaseListItem[] = Array.isArray(data) ? data : [];

  return (
    <div className="space-y-8">
      <PageHero title="Cases" description="Track and manage legal cases." />
      <div className="rounded-2xl border bg-card/80 p-6">
        {isLoading ? <p>Loading...</p> : null}
        <ul className="space-y-3">
          {cases.map((legalCase) => (
            <li key={legalCase.id} className="rounded-xl border p-4">
              <Link href={`/cases/${legalCase.id}`} className="font-medium text-primary">
                {legalCase.title}
              </Link>
              <p className="text-sm text-muted-foreground">{legalCase.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
