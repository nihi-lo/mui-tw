import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router";

import { RootLayout } from "./components/layouts";
import { RootPage } from "./components/pages";
import { ThemeProvider } from "./components/providers";

const ManualPage: React.FC = () => {
  const { projectName, "*": splat } = useParams();

  return <>{`${projectName} ${splat}`}</>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter basename="manu">
        <Routes>
          {/* / */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<RootPage />} />

            {/* /:projectName */}
            <Route path=":projectName">
              <Route index element={<ManualPage />} />

              {/* /:projectName/- */}
              <Route path="-">
                <Route index element={<Navigate to="/" />} />

                {/* /:projectName/-/* */}
                <Route path="*" element={<ManualPage />} />
              </Route>

              {/* /:projectName/* */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Route>

          <Route path="*" element={<>not found</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
