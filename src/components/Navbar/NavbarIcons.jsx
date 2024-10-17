import React from "react";

const NavbarIcons = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="shadow-lg transform translate-y-0 hover:-translate-y-1 ease-in-out duration-300"
    >
      {children}
    </a>
  );
};

export default NavbarIcons;
