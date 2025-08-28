import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { ReportePage } from "./components/ReportePage";
export function AppRouter() {
  return <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/reporte" element={<ReportePage />} />
          </Routes>
      </HashRouter>;
}