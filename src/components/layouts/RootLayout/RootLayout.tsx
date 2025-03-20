import { Outlet } from "react-router";

import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ModeToggle";

const RootLayout: React.FC = () => {
  return (
    <>
      <header className="bg-background sticky top-0 z-10 flex h-14 items-center justify-between px-4 shadow-md">
        <BrandLogo />
        <ModeToggle />
      </header>
      <Outlet />
    </>
  );
};

export { RootLayout };
