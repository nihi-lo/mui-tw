import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";

import { type Theme, ThemeStateContext } from "./ThemeProvider.context";
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
    <ThemeStateContext.Provider value={theme}>
      <MUIThemeProvider
        noSsr
        defaultMode={defaultTheme}
        modeStorageKey={storageKey}
        theme={muiTheme}
      >
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeStateContext.Provider>
  );
};

export { ThemeProvider };
