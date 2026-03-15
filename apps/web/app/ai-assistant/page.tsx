"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";

export default function AiAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await apiClient.post("/ai/chat", { prompt });
      const payload = result.data.data ?? result.data;
      setResponse(payload.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <PageHero title="AI Assistant" description="Legal assistant chat and summarization workspace." />
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-card/80 p-6">
        <textarea className="h-40 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Ask a legal question..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Button type="submit" disabled={loading}>{loading ? "Thinking..." : "Ask AI"}</Button>
      </form>
      {response ? <div className="rounded-2xl border bg-card/80 p-6 text-sm text-muted-foreground">{response}</div> : null}
    </div>
  );
}
