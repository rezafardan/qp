import React from "react";
import { MdEmail } from "react-icons/md";
import { PiArrowUpRightBold } from "react-icons/pi";
import { PiDiscordLogo } from "react-icons/pi";
import { RiInstagramLine } from "react-icons/ri";
import { ImTelegram } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ICONS = {
  MdEmail: <MdEmail size={28} />,
  PiDiscordLogo: <PiDiscordLogo size={28} />,
  RiInstagramLine: <RiInstagramLine size={28} />,
  ImTelegram: <ImTelegram size={28} />,
  GrLinkedin: <GrLinkedin size={28} />,
  ImGithub: <ImGithub size={28} />,
  AiOutlineTikTok: <AiOutlineTikTok size={28} />,
  FaTwitterSquare: <FaTwitterSquare size={28} />,
};

const Item = ({ link, img, title, detail, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex gap-2 p-1 group w-full h-full  ${className}`}
    >
      <div className="py-2 px-5 flex items-center justify-center group-hover:bg-neutral-500 ease-in-out duration-500 shadow-lg transform translate-y-0 group-hover:-translate-y-1">
        {img}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="text-base tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
            {title}
          </span>
          <span className="transform group-hover:rotate-45 ease-in-out duration-500">
            <PiArrowUpRightBold size={20} />
          </span>
        </div>
        <span className="font-thin text-xs text-balance">{detail}</span>
      </div>
    </a>
  );
};

const JumpingDots = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-2">
      <div
        className="w-3 h-3 bg-violet-500 rounded animate-jump"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-3 h-3 bg-violet-500 rounded animate-jump"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="w-3 h-3 bg-violet-500 rounded animate-jump"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
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
          <Item
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
