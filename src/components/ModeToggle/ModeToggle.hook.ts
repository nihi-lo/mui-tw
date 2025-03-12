import { useColorScheme } from "@mui/material";
import { useState } from "react";

import { useTheme } from "@/hooks/useTheme";

type State = {
  anchorElement: HTMLElement | null;
  isMenuOpen: boolean;
};

type Action = {
  openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  closeMenu: () => void;
  toggleLightTheme: () => void;
  toggleDarkTheme: () => void;
  toggleSystemTheme: () => void;
};

const useModeToggle = (): {
  state: State;
  action: Action;
} => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const { setTheme } = useTheme();
  const { setMode } = useColorScheme();

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorElement(null);
  };

  const toggleLightTheme = () => {
    setTheme("light");
    setMode("light");
    closeMenu();
  };

  const toggleDarkTheme = () => {
    setTheme("dark");
    setMode("dark");
    closeMenu();
  };

  const toggleSystemTheme = () => {
    setTheme("system");
    setMode("system");
    closeMenu();
  };

  return {
    state: {
      anchorElement,
      isMenuOpen: Boolean(anchorElement),
    },
    action: {
      openMenu,
      closeMenu,
      toggleLightTheme,
      toggleDarkTheme,
      toggleSystemTheme,
    },
  };
};

export { useModeToggle };
