import { useContext } from "react";

import {
  type ThemeState,
  ThemeStateContext,
  type ThemeDispatch,
  ThemeDispatchContext,
} from "./ThemeProvider.context";

const useThemeState = (): ThemeState => useContext(ThemeStateContext);

const useThemeDispatch = (): ThemeDispatch => useContext(ThemeDispatchContext);

export { useThemeState, useThemeDispatch };
