import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/i18n.js";
import Galaxy from "./components/hero/Galaxy.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Galaxy />
    <App />
  </>
);
