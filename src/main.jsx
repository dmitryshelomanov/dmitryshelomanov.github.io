import styled from "styled-components";
import ReactDOM from "react-dom/client";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "./ui/customize.less";
import { MainPage } from "./pages/next/Main";
import { CompanyDetails } from "./pages/next/CompanyDetails";
import { ProjectDetails } from "./pages/next/ProjectDetails";

const Page = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 3rem;

  video {
    max-width: 100%;
    height: auto;
  }

  .skills {
    max-width: 100%;
  }
`;

const Footer = styled.footer`
  opacity: 0.6;
  margin-top: auto;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 auto;
  max-height: min-content;
`;

function Template() {
  return (
    <Page>
      <Outlet />
      <Footer>2017-{new Date().getFullYear()} © dmitryshelomanov</Footer>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/c/:company" element={<CompanyDetails />} />
        <Route path="/p/:project" element={<ProjectDetails />} />
      </Route>
    </Routes>
  </HashRouter>
);
