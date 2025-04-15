import { useColorScheme } from "@mui/material";

import { useThemeDispatch } from "@/components/providers/ThemeProvider";

type State = undefined;

type Action = {
  toggleLightTheme: () => void;
  toggleDarkTheme: () => void;
  toggleSystemTheme: () => void;
};

export const useModeToggle = (): {
  state: State;
  action: Action;
} => {
  const { setTheme } = useThemeDispatch();
  const { setMode } = useColorScheme();

  const toggleLightTheme = () => {
    setTheme("light");
    setMode("light");
  };

  const toggleDarkTheme = () => {
    setTheme("dark");
    setMode("dark");
  };

  const toggleSystemTheme = () => {
    setTheme("system");
    setMode("system");
  };

  return {
    state: undefined,
    action: {
      toggleLightTheme,
      toggleDarkTheme,
      toggleSystemTheme,
    },
  };
};
