import React from "react";

const NavbarLinks = ({ children, link }) => {
  return (
    <a href={link} className="group relative w-max">
      <span className="cursor-pointer">{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-violet-500 bg-bg- group-hover:w-full"></span>
    </a>
  );
};

export default NavbarLinks;
