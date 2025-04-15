import { RiMoonLine, RiSettings2Line, RiSunLine } from "react-icons/ri";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

import { useModeToggle } from "./ModeToggle.hook";

export const ModeToggle: React.FC = () => {
  const {
    action: { toggleLightTheme, toggleDarkTheme, toggleSystemTheme },
  } = useModeToggle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <RiSunLine className="size-5 scale-100 dark:scale-0" />
          <RiMoonLine className="absolute size-5 scale-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={toggleLightTheme}>
          <RiSunLine className="text-foreground" />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={toggleDarkTheme}>
          <RiMoonLine className="text-foreground" />
          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={toggleSystemTheme}>
          <RiSettings2Line className="text-foreground" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
