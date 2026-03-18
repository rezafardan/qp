// src/App.jsx
import React from "react"
import Content from "./components/Contents/index.jsx"
import Hero from "./components/hero/index.jsx"
import Navbar from "./components/Navbar/index.jsx"
import enFlag from "./assets/en.svg"
import idFlag from "./assets/id.svg"
import { useTranslation } from "react-i18next"
import useSmoothScroll from "./hooks/useSmoothScroll.js"

function App() {
  const { i18n } = useTranslation()
  useSmoothScroll()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <Navbar />

      {/* pt-16 = padding top setinggi navbar (~64px) */}
<main style={{ position: "relative", zIndex: 10 }}>
  <Hero />
  <Content />
</main>

      <div className="fixed flex flex-col gap-1 right-2 sm:right-6 bottom-6 z-50">
        <button
          onClick={() => changeLanguage("id")}
          className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
        >
          <img src={idFlag} alt="ID Flag Translation" />
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
        >
          <img src={enFlag} alt="EN Flag Translation" />
        </button>
      </div>

      <div className="fixed flex flex-col gap-1 -left-[14.2rem] bottom-[16rem] -rotate-90">
        <p className="text-xs font-extralight font-sans tracking-[0.3em] flex">
          <div className="border-b m-2 w-48"></div>
          <span>Last updated - 18 March 2026</span>
        </p>
      </div>
    </>
  )
}

export default App
