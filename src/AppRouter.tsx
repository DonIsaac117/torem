import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { ReportePage } from "./components/ReportePage";
export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/reporte" element={<ReportePage />} />
          </Routes>
      </BrowserRouter>;
}