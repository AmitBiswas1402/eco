import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preferred-theme") || "forest",
  setTheme: (theme) => {
    set({ theme }); // Set state first
    localStorage.setItem("preferred-theme", theme);
  },
}));
