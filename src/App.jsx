// src/App.jsx
import React from "react";
import Content from "./components/Contents/index.jsx";
import Hero from "./components/hero/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import LanguageSwitcher from "./components/ui/LanguageSwitcher.jsx";
import LastUpdated from "./components/ui/LastUpdated.jsx";
import DevEditor from "./components/DevEditor/index.jsx";
import DevEditorPage from "./components/DevEditor/EditorPage.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

// Resolved at module load — URL won't change during session
const IS_EDITOR_PAGE =
  import.meta.env.DEV &&
  new URLSearchParams(window.location.search).has("dev-editor");

function App() {
  useSmoothScroll();

  if (IS_EDITOR_PAGE) return <DevEditorPage />;

  return (
    <>
      <Navbar />

      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Content />
      </main>

      <LanguageSwitcher />
      <LastUpdated />
      <DevEditor />
    </>
  );
}

export default App;
