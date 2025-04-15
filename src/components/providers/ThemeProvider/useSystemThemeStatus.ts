import { useSyncExternalStore } from "react";

export const useSystemThemeStatus = (): {
  isDarkTheme: boolean;
} => {
  const isDarkTheme = useSyncExternalStore(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  return {
    isDarkTheme,
  };
};
