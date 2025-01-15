import React from "react";
import Content from "./components/Contents/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import enFlag from "./assets/en.svg";
import idFlag from "./assets/id.svg";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Navbar />
      <Hero />
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

      <div className="fixed flex flex-col gap-1 -left-[9.5rem] sm:-left-[8.5rem] bottom-[10.8rem] -rotate-90">
        <p className="text-[0.6rem] font-extralight font-sans tracking-[0.3em] flex">
          <div className="border-b m-2 w-20"></div>
          <span>Last updated - 15 January 2025</span>
        </p>
      </div>
      <Content />
    </>
  );
}

export default App;
