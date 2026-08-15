import { createRoot } from "react-dom/client";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/next/Main";
import { CompanyDetails } from "./pages/next/CompanyDetails";
import { ProjectDetails } from "./pages/next/ProjectDetails";
import "./index.css";

function Template() {
  return (
    <section className="mx-auto mb-12 flex h-full w-full min-w-0 max-w-[960px] flex-col items-start gap-2 [&_video]:h-auto [&_video]:max-w-full [&_.skills]:max-w-full">
      <Outlet />
      <footer className="opacity-60 mt-auto flex w-full justify-start items-center flex-auto max-h-min">
        2017-{new Date().getFullYear()} © dmitryshelomanov
      </footer>
    </section>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/c/:company" element={<CompanyDetails />} />
        <Route path="/p/:project" element={<ProjectDetails />} />
      </Route>
    </Routes>
  </HashRouter>,
);
