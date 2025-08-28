import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { PqrsPage } from "./components/PqrsPage";
export function AppRouter() {
  return <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pqrs" element={<PqrsPage />} />
          </Routes>
      </HashRouter>;
}