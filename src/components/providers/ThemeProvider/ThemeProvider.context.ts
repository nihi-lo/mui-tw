import { createContext } from "react";

type Theme = "dark" | "light" | "system";

type ThemeState = {
  currentTheme: Theme;
};

type ThemeDispatch = {
  setTheme: (theme: Theme) => void;
};

const ThemeStateContext = createContext<ThemeState>({
  currentTheme: "system",
});

const ThemeDispatchContext = createContext<ThemeDispatch>({
  setTheme: () => null,
});

export { type Theme, type ThemeState, type ThemeDispatch, ThemeStateContext, ThemeDispatchContext };
