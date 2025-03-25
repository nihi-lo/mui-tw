import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { RootLayout } from "@/components/layouts";
import { RootPage } from "@/components/pages";
import { ManualPageRouter } from "@/components/routers/AppRouter/ManualPageRouter";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename="manu">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
          <Route path=":projectName">
            <Route index element={<Navigate replace to="/" />} />
            <Route path="manuals">
              <Route index element={<Navigate replace to="./home" />} />
              <Route path="*" element={<ManualPageRouter />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
