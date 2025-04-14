import { useContext } from "react";

import { ThemeContext, type ThemeState } from "./ThemeProvider.context";

const useTheme = (): ThemeState => useContext(ThemeContext);

export { useTheme };
