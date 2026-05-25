// src/App.jsx
import React from "react";
import Content from "./components/Contents/index.jsx";
import Hero from "./components/hero/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import LanguageSwitcher from "./components/ui/LanguageSwitcher.jsx";
import LastUpdated from "./components/ui/LastUpdated.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />

      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Content />
      </main>

      <LanguageSwitcher />
      <LastUpdated />
    </>
  );
}

export default App;
