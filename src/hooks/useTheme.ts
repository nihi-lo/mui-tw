import { useContext } from "react";

import { ThemeContext, type ThemeState } from "@/components/providers/ThemeProvider";

const useTheme = (): ThemeState => useContext(ThemeContext);

export { useTheme };
