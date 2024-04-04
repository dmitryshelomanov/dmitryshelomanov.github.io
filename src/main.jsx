import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./ui/customize.less";
import { MainPage } from "./pages/next/Main";
import { CompanyDetails } from "./pages/next/CompanyDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:company" element={<CompanyDetails />} />
    </Routes>
  </HashRouter>
);
