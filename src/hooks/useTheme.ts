import { useContext } from "react";

import { type Theme, ThemeContext } from "@/contexts/ThemeContext";

type State = {
  currentTheme: Theme;
};

type Action = {
  setTheme: (theme: Theme) => void;
};

const useTheme = (): State & Action => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return {
    currentTheme: theme.currentTheme,
    setTheme: theme.setTheme,
  };
};

export { useTheme };
