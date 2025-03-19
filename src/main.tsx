import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { RootLayout } from "./components/layouts";
import { RootPage } from "./components/pages";
import { ThemeProvider } from "./components/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route path="manu" element={<RootLayout />}>
            <Route index element={<RootPage />} />
            <Route path="*" element={<>root *</>} />
          </Route>

          <Route path="*" element={<>not found</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
