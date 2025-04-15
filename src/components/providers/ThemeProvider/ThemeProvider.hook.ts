import { createTheme, type Theme as MUITheme } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

import { type Theme, type ThemeDispatch, type ThemeState } from "./ThemeProvider.context";
import { useSystemThemeStatus } from "./useSystemThemeStatus";

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

  const { isDarkTheme: systemIsDarkTheme } = useSystemThemeStatus();

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
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

    if (currentTheme === "system") {
      root.classList.add(systemIsDarkTheme ? "dark" : "light");
      return;
    }
    root.classList.add(currentTheme);
  }, [currentTheme, systemIsDarkTheme]);

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
