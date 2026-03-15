"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const router = useRouter();
  const { setTokens } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiClient.post("/auth/login", { email, password });
      return data.data ?? data;
    },
    onSuccess: (payload) => {
      setTokens(payload.accessToken, payload.refreshToken);
      router.push("/dashboard");
    },
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="space-y-8">
      <PageHero title="Login" description="Sign in to your LegalMitra account." />
      <form onSubmit={onSubmit} className="max-w-lg space-y-4 rounded-2xl border bg-card/80 p-6">
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" disabled={loginMutation.isPending}>{loginMutation.isPending ? "Signing in..." : "Login"}</Button>
      </form>
    </div>
  );
}
