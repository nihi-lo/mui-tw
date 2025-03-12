import { IconButton, Menu, MenuItem } from "@mui/material";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import { useModeToggle } from "./ModeToggle.hook";

const ModeToggle: React.FC = () => {
  const {
    state: { anchorElement, isMenuOpen },
    action: { openMenu, closeMenu, toggleLightTheme, toggleDarkTheme, toggleSystemTheme },
  } = useModeToggle();

  return (
    <div>
      <IconButton onClick={openMenu}>
        <RiSunLine className="scale-100 dark:scale-0" />
        <RiMoonLine className="absolute scale-0 dark:scale-100" />
      </IconButton>
      <Menu anchorEl={anchorElement} open={isMenuOpen} onClose={closeMenu}>
        <MenuItem onClick={toggleLightTheme}>Light</MenuItem>
        <MenuItem onClick={toggleDarkTheme}>Dark</MenuItem>
        <MenuItem onClick={toggleSystemTheme}>System</MenuItem>
      </Menu>
    </div>
  );
};

export { ModeToggle };
