import React from "react";

import { HelloWorldText } from "@/components/HelloWorldText";
import { ModeToggle } from "@/components/ModeToggle";

export const App: React.FC = () => {
  return (
    <>
      <HelloWorldText />
      <ModeToggle />
    </>
  );
};
