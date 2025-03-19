import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";

import { type Theme, ThemeContext } from "@/contexts/ThemeContext";

import { useThemeProvider } from "./ThemeProvider.hook";

type ThemeProviderProps = {
  defaultTheme?: Theme;
  storageKey?: string;
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  const {
    state: { theme, defaultTheme, storageKey, muiTheme },
  } = useThemeProvider({
    defaultTheme: props.defaultTheme,
    storageKey: props.storageKey,
  });

  return (
    <ThemeContext.Provider value={theme}>
      <MUIThemeProvider
        noSsr
        defaultMode={defaultTheme}
        modeStorageKey={storageKey}
        theme={muiTheme}
      >
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
