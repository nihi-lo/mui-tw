import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "@/components/routers";

import { ThemeProvider } from "./components/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
);
