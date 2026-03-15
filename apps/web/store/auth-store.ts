import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: (accessToken, refreshToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("legalmitra_access_token", accessToken);
      localStorage.setItem("legalmitra_refresh_token", refreshToken);
    }
    set({ accessToken, refreshToken });
  },
  clearTokens: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("legalmitra_access_token");
      localStorage.removeItem("legalmitra_refresh_token");
    }
    set({ accessToken: null, refreshToken: null });
  },
}));
