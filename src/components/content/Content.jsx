import React, { useState } from "react";
import Bio from "./Bio";
import Certification from "./Certification";
import Contact from "./Contact";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState("bg-transparent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setScroll("backdrop-blur-2xl ease-in-out duration-500");
    } else {
      setScroll("bg-transparent");
    }
  });
  return (
    <div
      className={`px-[4%] py-4 sm:px-[8%] lg:px-[12%] xl:px[18%] flex flex-col items-center ${scroll}`}
    >
      {/* ====== */}
      <div className="h-[94vh]" />

      {/* ====== */}

      <h1
        id="profile"
        className="text-5xl md:text-8xl mb-6 self-start font-extrabold"
      >
        <ScrollAnimation
          animateIn="backInDown"
          animateOut="backOutLeft"
          className="mb-10"
        >
          {t("content.profile.title")}
        </ScrollAnimation>
      </h1>

      <div>
        <ScrollAnimation animateIn="fadeIn" duration={0.3}>
          <h3 className="text-center md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                t("content.profile.subtitle.1"),
                4000,
                t("content.profile.subtitle.2"),
                4000,
                t("content.profile.subtitle.3"),
                4000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Bio />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={0.3}>
          <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                " ",
                500,
                t("content.experience.subtitle.1"),
                1000,
                t("content.experience.subtitle.2"),
                1000,
                t("content.experience.subtitle.3"),
                1000,
                t("content.experience.subtitle.full"),
                18000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Experience />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={0.3}>
          <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                " ",
                500,
                t("content.certification.subtitle.1"),
                1000,
                t("content.certification.subtitle.2"),
                1000,
                t("content.certification.subtitle.full"),
                18000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Certification />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={0.3}>
          <h3 className="text-center mt-40 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                " ",
                500,
                t("content.skills.subtitle"),
                1000,
                t("content.skills.subtitle"),
                18000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Skill />
        </ScrollAnimation>
      </div>

      {/* ====== */}
      <ScrollAnimation animateIn="fadeIn" duration={0.3}>
        <h1
          id="project"
          className="text-5xl mt-40 md:text-8xl mb-6 self-start font-extrabold"
        >
          <ScrollAnimation
            animateIn="backInDown"
            animateOut="backOutLeft"
            className="mb-10"
          >
            {t("content.project.title")}
          </ScrollAnimation>
        </h1>
        <div>
          <h3 className="text-center md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                " ",
                500,
                t("content.project.subtitle.1"),
                1000,
                t("content.project.subtitle.2"),
                1000,
                t("content.project.subtitle.full"),
                18000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Project />
        </div>
      </ScrollAnimation>

      {/* ====== */}
      <ScrollAnimation animateIn="fadeIn" duration={0.3}>
        <h1
          id="contact"
          className="text-5xl mt-40 md:text-8xl mb-6 self-start font-extrabold"
        >
          <ScrollAnimation
            animateIn="backInDown"
            animateOut="backOutLeft"
            className="mb-10"
          >
            {t("content.contact.title")}
          </ScrollAnimation>
        </h1>
        <div>
          <h3 className="text-center md:text-xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest">
            <TypeAnimation
              sequence={[
                " ",
                500,
                t("content.contact.subtitle.1"),
                1000,
                t("content.contact.subtitle.2"),
                1000,
                t("content.contact.subtitle.full"),
                18000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <Contact />
        </div>
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default Content;
