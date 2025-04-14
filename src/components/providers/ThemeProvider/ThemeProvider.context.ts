import { createContext } from "react";

type Theme = "dark" | "light" | "system";

type ThemeState = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeState>({
  currentTheme: "system",
  setTheme: () => null,
});

export { type Theme, type ThemeState, ThemeContext };
