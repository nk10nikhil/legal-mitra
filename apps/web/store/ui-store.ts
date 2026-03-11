import { create } from "zustand";

type UIState = {
  mobileNavOpen: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
  closeMobileNav: () => set({ mobileNavOpen: false }),
}));
