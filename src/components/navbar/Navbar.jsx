import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const NavbarLinks = ({ children, link }) => {
  return (
    <a href={link} className="group relative w-max">
      <span className="cursor-pointer">{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-violet-500 bg-bg- group-hover:w-full"></span>
    </a>
  );
};

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

const Navbar = () => {
  const [scroll, setScroll] = useState("bg-transparent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setScroll("bg-neutral-900");
    } else {
      setScroll("bg-transparent");
    }
  });

  return (
    <nav className={`sticky inset-x-0 top-0 z-10 overflow-scroll ${scroll}`}>
      <div className="px-4 md:px-10 py-4 flex flex-row-reverse md:flex-row justify-between gap-4">
        <div className="md:hidden flex items-center cursor-pointer">
          {/* <IoIosMenu size={24} /> */}
        </div>
        <div className="hidden gap-6 text-sm items-center md:flex">
          <NavbarLinks link="#profile">PROFILE</NavbarLinks>
          <NavbarLinks link="#project">PROJECT</NavbarLinks>
          <NavbarLinks link="#contact">CONTACT</NavbarLinks>
        </div>

        <div className="group px-8 h-max relative">
          <div className="cursor-default">
            <p className="font-caveat font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest text-center">
              Reza
            </p>
            <p className="font-thin text-xs text-center">Junior Programmer</p>
          </div>
          <div
            className="absolute hidden bg-violet-500 right-0 top-0 bottom-0 w-0 opacity-0 transition-all duration-700 
          group-hover:w-full group-hover:opacity-100
          md:flex gap-4 items-center justify-center"
          >
            <NavbarIcons link="https://www.instagram.com/rezafardan_/">
              <FaInstagram size={20} />
            </NavbarIcons>
            <NavbarIcons link="https://www.linkedin.com/in/reza-fardan/">
              <FaLinkedin size={20} />
            </NavbarIcons>
            <NavbarIcons link="https://github.com/rezafardan">
              <FaGithub size={20} />
            </NavbarIcons>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
