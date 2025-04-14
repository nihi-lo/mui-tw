import { useContext } from "react";

import {
  type ThemeState,
  ThemeStateContext,
  type ThemeDispatch,
  ThemeDispatchContext,
} from "./ThemeProvider.context";

export const useThemeState = (): ThemeState => useContext(ThemeStateContext);

export const useThemeDispatch = (): ThemeDispatch => useContext(ThemeDispatchContext);
