"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";

export default function EvidencePage() {
  const [caseId, setCaseId] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("case_id", caseId);
    formData.append("description", description);
    formData.append("file", file);

    await apiClient.post("/evidence/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Evidence uploaded");
  };

  return (
    <div className="space-y-8">
      <PageHero title="Evidence" description="Upload and verify case evidence." />
      <form onSubmit={onSubmit} className="max-w-xl space-y-4 rounded-2xl border bg-card/80 p-6">
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Case ID" value={caseId} onChange={(e) => setCaseId(e.target.value)} />
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <Button type="submit">Upload Evidence</Button>
      </form>
    </div>
  );
}
