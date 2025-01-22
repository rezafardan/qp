import React from "react";
import { useTranslation } from "react-i18next";

const Titles = ({ icon, company, location, duration }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-start bg-gradient-to-r from-violet-500 to-pink-500 h-fit py-2 px-4 ml-5 sm:ml-0">
      <div className="absolute sm:hidden flex ml-1 sm:ml-0 items-center justify-center top-6 w-8 h-8 rounded-l-full left-[-32px]  bg-violet-500 z-[2]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold sm:text-lg md:text-xl">{company}</h3>
      <span className="text-sm font-light">{location}</span>
      <span className="text-xs font-light self-end">{duration}</span>
    </div>
  );
};

export default Titles;
