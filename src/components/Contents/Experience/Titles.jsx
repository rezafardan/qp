// src/components/Contents/Experience/Titles.jsx
import React from "react";

const Titles = ({ icon, company, location, duration }) => {
  return (
    <div className="relative flex flex-col items-start bg-gradient-to-r from-violet-500 to-pink-500 h-fit py-3 px-4 ml-5 sm:ml-0">
      {/* Icon — hanya muncul di mobile */}
      <div className="absolute sm:hidden flex items-center justify-center top-6 w-8 h-8 rounded-l-full left-[-32px] bg-violet-500 z-[2]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold sm:text-lg md:text-xl leading-tight">
        {company}
      </h3>
      {location && (
        <span className="text-xs font-light opacity-80 mt-0.5">{location}</span>
      )}
      <span className="text-xs font-light self-end mt-1 opacity-90">
        {duration}
      </span>
    </div>
  );
};

export default Titles;
