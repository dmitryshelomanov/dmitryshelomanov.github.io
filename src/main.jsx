import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { routes } from "./pages";
import "./ui/customize.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>{routes}</Router>
);
