// src/components/Contents/Contact/index.jsx
import React from "react";
import { MdEmail } from "react-icons/md";
import { PiDiscordLogo } from "react-icons/pi";
import { RiInstagramLine } from "react-icons/ri";
import { ImTelegram, ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ContactItem from "./ContactItem";
import JumpingDots from "./JumpingDots";

const ICONS = {
  MdEmail:         <MdEmail size={28} />,
  PiDiscordLogo:   <PiDiscordLogo size={28} />,
  RiInstagramLine: <RiInstagramLine size={28} />,
  ImTelegram:      <ImTelegram size={28} />,
  GrLinkedin:      <GrLinkedin size={28} />,
  ImGithub:        <ImGithub size={28} />,
  AiOutlineTikTok: <AiOutlineTikTok size={28} />,
  FaTwitterSquare: <FaTwitterSquare size={28} />,
};

const Contact = () => {
  const { t } = useTranslation();
  const items = t("contact.items", { returnObjects: true });

  return (
    <>
      <JumpingDots />
      <div className="mb-10 mt-4 text-center text-sm sm:text-base font-extralight w-full sm:px-[20%]">
        <p>{t("contact.message")}</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        {items.map((item, index) => (
          <ContactItem
            key={index}
            link={item.link}
            img={ICONS[item.img]}
            title={item.title}
            detail={item.detail}
            className={item.className || ""}
          />
        ))}
      </div>
    </>
  );
};

export default Contact;
