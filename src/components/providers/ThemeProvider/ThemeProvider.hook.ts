import { createTheme, type Theme as MUITheme } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

import { type Theme, type ThemeState } from "./ThemeProvider.context";

type State = {
  theme: ThemeState;
  defaultTheme: Theme;
  storageKey: string;
  muiTheme: MUITheme;
};

type Action = undefined;

type Argument = {
  defaultTheme?: Theme;
  storageKey?: string;
};

const useThemeProvider = ({
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

  const theme = useMemo<ThemeState>(
    () => ({
      currentTheme: currentTheme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setCurrentTheme(theme);
      },
    }),
    [currentTheme, storageKey],
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (currentTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(currentTheme);
  }, [currentTheme]);

  return {
    state: {
      theme,
      defaultTheme,
      storageKey,
      muiTheme,
    },
    action: undefined,
  };
};

export { useThemeProvider };
