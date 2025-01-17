import React, { useState } from "react";
import Bio from "./Biography";
import Certification from "./Certification";
import Contact from "./Contact";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Footer from "../Footer/";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState("bg-transparent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setScroll("backdrop-blur-3xl bg-black/50 ease-in-out duration-500");
    } else {
      setScroll("bg-transparent");
    }
  });
  return (
    <div
      className={`px-[4%] py-4 sm:px-[8%] lg:px-[14%] xl:px-[18%] 2xl:px-[18%] 3xl:px-[22%] flex flex-col items-center ${scroll}`}
    >
      {/* ====== */}
      <div className="h-[94vh]" />

      {/* ====== */}

      {/* TITLE */}
      <h1
        id="project"
        className="text-5xl md:text-9xl mb-6 self-start font-extrabold"
      >
        {t("content.project.title")}
      </h1>
      <div>
        <h3 className="text-center mt-10 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.project.subtitle.1")}
        </h3>
        <Project />
      </div>

      <h1
        id="profile"
        className="text-5xl mt-40 md:text-9xl mb-6 self-start font-extrabold"
      >
        {t("content.profile.title")}
      </h1>

      <div>
        <h3 className="text-center mt-10 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.experience.subtitle.1")}
        </h3>
        <Experience />

        <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.profile.subtitle.1")}
        </h3>
        <Bio />

        <div className="flex justify-center items-center w-full mt-20">
          <div class="loader">
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
            <div class="loader__circle"></div>
          </div>
        </div>

        <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.certification.subtitle.1")}
        </h3>
        <Certification />

        <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.skills.subtitle")}
        </h3>
        <Skill />
      </div>

      {/* ====== */}

      <h1
        id="contact"
        className="text-5xl mt-40 md:text-9xl mb-6 self-start font-extrabold"
      >
        {t("content.contact.title")}
      </h1>
      <div>
        <h3 className="text-center mt-10 md:text-xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
          {t("content.contact.subtitle.1")}
        </h3>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Content;
