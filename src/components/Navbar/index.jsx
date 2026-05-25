// src/components/Navbar/index.jsx
import React, { useState, useEffect } from "react";
import NavbarLinks from "./NavbarLinks";
import BrandLogo from "./BrandLogo";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["project", "profile", "contact"];
      const scrollPosition = window.scrollY + 500;
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= scrollPosition) current = id;
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ease-in-out duration-500 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-10 py-4 flex flex-row-reverse md:flex-row justify-between gap-4">
        <div className="hidden gap-6 text-sm items-center md:flex">
          <NavbarLinks link="#project" active={activeSection === "project"}>
            {t("navbar.navbar2")}
          </NavbarLinks>
          <NavbarLinks link="#profile" active={activeSection === "profile"}>
            {t("navbar.navbar1")}
          </NavbarLinks>
          <NavbarLinks link="#contact" active={activeSection === "contact"}>
            {t("navbar.navbar3")}
          </NavbarLinks>
        </div>

        <BrandLogo />
      </div>
    </nav>
  );
};

export default Navbar;
