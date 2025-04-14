import { useContext } from "react";

import { type ThemeState, ThemeStateContext } from "./ThemeProvider.context";

export const useThemeState = (): ThemeState => useContext(ThemeStateContext);
