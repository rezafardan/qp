// src/components/Contents/index.jsx
import React, { useState, useEffect } from "react";
import Bio from "./Biography";
import Certification from "./Certification";
import Contact from "./Contact";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import Footer from "../Footer/";
import SectionSubtitle from "../ui/SectionSubtitle";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`px-[4%] py-4 sm:px-[8%] lg:px-[14%] xl:px-[18%] 2xl:px-[18%] 3xl:px-[22%] flex flex-col items-center relative z-10 transition-all ease-in-out duration-500 ${
        scrolled ? "backdrop-blur-2xl bg-black/95" : "bg-transparent"
      }`}
    >
      <div className="h-screen" />

      {/* PROJECT */}
      <h1 id="project" className="text-5xl md:text-9xl mb-6 self-start font-extrabold">
        {t("content.project.title")}
      </h1>
      <div>
        <SectionSubtitle>{t("content.project.subtitle.1")}</SectionSubtitle>
        <Project />
      </div>

      {/* PROFILE */}
      <h1 id="profile" className="text-5xl mt-40 md:text-9xl mb-6 self-start font-extrabold">
        {t("content.profile.title")}
      </h1>

      <div>
        <SectionSubtitle>{t("content.experience.subtitle.1")}</SectionSubtitle>
        <Experience />

        <SectionSubtitle className="mt-40">{t("content.profile.subtitle.1")}</SectionSubtitle>
        <Bio />

        <div className="flex justify-center items-center w-full mt-20">
          <div className="loader">
            <div className="loader__circle" />
            <div className="loader__circle" />
            <div className="loader__circle" />
            <div className="loader__circle" />
            <div className="loader__circle" />
          </div>
        </div>

        <SectionSubtitle className="mt-40">{t("content.certification.subtitle.1")}</SectionSubtitle>
        <Certification />

        <SectionSubtitle className="mt-40">{t("content.skills.subtitle")}</SectionSubtitle>
        <Skill />
      </div>

      {/* CONTACT */}
      <h1 id="contact" className="text-5xl mt-40 md:text-9xl mb-6 self-start font-extrabold">
        {t("content.contact.title")}
      </h1>
      <div>
        <SectionSubtitle className="mt-10 mb-10">{t("content.contact.subtitle.1")}</SectionSubtitle>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Content;
