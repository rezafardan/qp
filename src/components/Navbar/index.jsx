import React, { useState } from "react";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scroll, setScroll] = useState("bg-transparent");
  const { t } = useTranslation();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setScroll("bg-neutral-900");
    } else {
      setScroll("bg-transparent");
    }
  });

  return (
    <nav className={`sticky inset-x-0 top-0 z-10 overflow-scroll ${scroll}`}>
      <div className="px-4 md:px-10 py-4 flex flex-row-reverse md:flex-row justify-between gap-4">
        <div className="md:hidden flex items-center cursor-pointer">
          {/* <IoIosMenu size={24} /> */}
        </div>
        <div className="hidden gap-6 text-sm items-center md:flex">
          <NavbarLinks link="#profile">{t("navbar.navbar1")}</NavbarLinks>
          <NavbarLinks link="#project">{t("navbar.navbar2")}</NavbarLinks>
          <NavbarLinks link="#contact">{t("navbar.navbar3")}</NavbarLinks>
        </div>

        <div className="group px-8 h-max relative">
          <div className="cursor-default animate-pulse">
            <p className="font-caveat font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest text-center">
              Reza
            </p>
            <p className="font-thin text-xs text-center">Junior Programmer</p>
          </div>
          <div
            className="absolute hidden bg-violet-500 right-0 top-0 bottom-0 w-0 opacity-0 transition-all duration-700 
          group-hover:w-full group-hover:opacity-100
          md:flex gap-4 items-center justify-center"
          >
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
      </div>
    </nav>
  );
};

export default Navbar;
