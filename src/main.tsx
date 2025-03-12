import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/App";
import { ThemeProvider } from "@/components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
