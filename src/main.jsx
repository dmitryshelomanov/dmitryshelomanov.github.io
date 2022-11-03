import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { routes } from "./pages";
import { LocaleProvider } from "./i18n";
import "./ui/customize.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocaleProvider>
    <Router>{routes}</Router>
  </LocaleProvider>
);
