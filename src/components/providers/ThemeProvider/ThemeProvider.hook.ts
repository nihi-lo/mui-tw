import { createTheme, type Theme as MUITheme } from "@mui/material";
import { useState, useMemo, useSyncExternalStore, useEffect } from "react";

import { type Theme, type ThemeDispatch, type ThemeState } from "./ThemeProvider.context";

type State = {
  themeState: ThemeState;
  themeDispatch: ThemeDispatch;
  defaultTheme: Theme;
  storageKey: string;
  muiTheme: MUITheme;
};

type Action = undefined;

type Argument = {
  defaultTheme?: Theme;
  storageKey?: string;
};

export const useThemeProvider = ({
  defaultTheme = "system",
  storageKey = "theme",
}: Argument): {
  state: State;
  action: Action;
} => {
  const muiTheme = createTheme({
    colorSchemes: { dark: true, light: true },
  });

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  const windowTheme = useSyncExternalStore(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  );

  const themeState = useMemo<ThemeState>(
    () => ({
      currentTheme,
    }),
    [currentTheme],
  );

  const themeDispatch = useMemo<ThemeDispatch>(
    () => ({
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setCurrentTheme(theme);
      },
    }),
    [storageKey],
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(currentTheme === "system" ? windowTheme : currentTheme);
  }, [currentTheme, windowTheme]);

  return {
    state: {
      themeState,
      themeDispatch,
      defaultTheme,
      storageKey,
      muiTheme,
    },
    action: undefined,
  };
};
