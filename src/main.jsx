// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/i18n.js";
import Galaxy from "./components/hero/Galaxy.jsx";
import GalaxyForeground from "./components/hero/GalaxyForeground.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Galaxy />           {/* z-[-10] — paling belakang */}
    <App />              {/* z-[5]   — text di tengah  */}
    {/* <GalaxyForeground /> z-[20]  — paling depan   */}
  </>
);
