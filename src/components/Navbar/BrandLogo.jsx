import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavbarIcons from "./NavbarIcons";

const BrandLogo = () => {
  const { t } = useTranslation();

  return (
    <div className="group px-8 h-max relative">
      <div className="cursor-default">
        <p className="font-caveat font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest text-center">
          {t("navbar.brand.name")}
        </p>
        <p className="font-thin text-xs text-center">
          {t("navbar.brand.subtitle")}
        </p>
      </div>
      <div className="absolute hidden bg-violet-500 right-0 top-0 bottom-0 w-0 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100 md:flex gap-4 items-center justify-center">
        <NavbarIcons link="https://www.instagram.com/rezafardan_/">
          <FaInstagram size={20} />
        </NavbarIcons>
        <NavbarIcons link="https://www.linkedin.com/in/reza-fardan/">
          <FaLinkedin size={20} />
        </NavbarIcons>
        <NavbarIcons link="https://github.com/rezafardan">
          <FaGithub size={20} />
        </NavbarIcons>
      </div>
    </div>
  );
};

export default BrandLogo;
