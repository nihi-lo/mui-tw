import { createContext } from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeState = {
  currentTheme: Theme;
};

export const ThemeStateContext = createContext<ThemeState>({
  currentTheme: "system",
});

export type ThemeDispatch = {
  setTheme: (theme: Theme) => void;
};

export const ThemeDispatchContext = createContext<ThemeDispatch>({
  setTheme: () => null,
});
