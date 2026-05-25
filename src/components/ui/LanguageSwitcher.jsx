import { useTranslation } from "react-i18next";
import enFlag from "../../assets/en.svg";
import idFlag from "../../assets/id.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed flex flex-col gap-1 right-2 sm:right-6 bottom-6 z-50">
      <button
        onClick={() => i18n.changeLanguage("id")}
        className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
      >
        <img src={idFlag} alt="ID Flag Translation" />
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="opacity-40 hover:opacity-80 transition ease-in-out duration-300"
      >
        <img src={enFlag} alt="EN Flag Translation" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
