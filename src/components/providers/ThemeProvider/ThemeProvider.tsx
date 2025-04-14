import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";

import { type Theme, ThemeDispatchContext, ThemeStateContext } from "./ThemeProvider.context";
import { useThemeProvider } from "./ThemeProvider.hook";

type ThemeProviderProps = {
  defaultTheme?: Theme;
  storageKey?: string;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  const {
    state: { themeState, themeDispatch, defaultTheme, storageKey, muiTheme },
  } = useThemeProvider({
    defaultTheme: props.defaultTheme,
    storageKey: props.storageKey,
  });

  return (
    <ThemeStateContext.Provider value={themeState}>
      <ThemeDispatchContext.Provider value={themeDispatch}>
        <MUIThemeProvider
          noSsr
          defaultMode={defaultTheme}
          modeStorageKey={storageKey}
          theme={muiTheme}
        >
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};
