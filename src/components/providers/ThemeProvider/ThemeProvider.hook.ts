import { createTheme, type Theme as MUITheme } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

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

  const themeState = useMemo<ThemeState>(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    switch (currentTheme) {
      case "dark":
      case "light":
        root.classList.add(currentTheme);
        break;
      case "system":
        root.classList.add(
          window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        );
        break;
    }

    return {
      currentTheme,
    };
  }, [currentTheme]);

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
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (currentTheme === "dark" || currentTheme === "light") {
        return;
      }

      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [currentTheme]);

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
