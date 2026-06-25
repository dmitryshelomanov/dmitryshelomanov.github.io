import { createRoot } from "react-dom/client";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/next/Main";
import { CompanyDetails } from "./pages/next/CompanyDetails";
import { ProjectDetails } from "./pages/next/ProjectDetails";
import { ThemeProvider } from "./lib/ThemeProvider";
import { ThemeToggle } from "./ui/atoms/ThemeToggle";
import "./index.css";

function Template() {
  return (
    <section className="flex w-full h-full flex-col items-start gap-2 mb-12 [&_video]:max-w-full [&_video]:h-auto [&_.skills]:max-w-full">
      <ThemeToggle />
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
  <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/c/:company" element={<CompanyDetails />} />
          <Route path="/p/:project" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
