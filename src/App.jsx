import React from "react";
import { useTranslation } from "react-i18next";
import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import enFlag from "./assets/en.svg";
import idFlag from "./assets/id.svg";

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <>
      <Navbar changeLanguage={changeLanguage} />
      <Hero />
      <div className="fixed flex flex-col gap-1 right-2 sm:right-6 bottom-6 z-50">
        <button
          onClick={() => changeLanguage("id")}
          className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
        >
          <img src={idFlag} alt="Id Flag" />
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
        >
          <img src={enFlag} alt="En Flag" />
        </button>
      </div>
      <Content />
    </>
  );
}

export default App;
