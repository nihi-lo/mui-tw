import { useContext } from "react";

import { type ThemeState, ThemeStateContext } from "./ThemeProvider.context";

const useThemeState = (): ThemeState => useContext(ThemeStateContext);

export { useThemeState };
