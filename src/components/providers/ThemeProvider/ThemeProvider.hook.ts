import { type Theme as MUITheme } from "@mui/material";
import { useState, useEffect } from "react";

import { type Theme, type ThemeState } from "./ThemeProvider.context";
import { muiTheme } from "./ThemeProvider.type";

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
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
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

  const theme: ThemeState = {
    currentTheme: currentTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setCurrentTheme(theme);
    },
  };

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
