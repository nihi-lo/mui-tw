import { useContext } from "react";

import { type ThemeDispatch, ThemeDispatchContext } from "./ThemeProvider.context";

export const useThemeDispatch = (): ThemeDispatch => useContext(ThemeDispatchContext);
