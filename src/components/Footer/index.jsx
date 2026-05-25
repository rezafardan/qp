// src/components/Footer/index.jsx
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="cursor-default mt-20">
        <p className="font-caveat font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest text-center">
          {t("navbar.brand.name")}
        </p>
        <p className="font-thin text-xs text-center" />
        <p className="font-thin text-xs text-center">
          {t("footer.copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
