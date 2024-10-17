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
      <Content />
    </>
  );
}

export default App;
