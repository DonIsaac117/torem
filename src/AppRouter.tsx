import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { PqrsPage } from "./components/PqrsPage";
import { useScrollToTop } from './hooks/useScrollToTop';

function AppContent() {
  useScrollToTop(); // Hook para scroll automático al cambiar de ruta

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pqrs" element={<PqrsPage />} />
    </Routes>
  );
}

export function AppRouter() {
  return (
    <HashRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <AppContent />
    </HashRouter>
  );
}