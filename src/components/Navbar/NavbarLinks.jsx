// src/components/Navbar/NavbarLinks.jsx
import React from "react"
import { useLenisScroll } from "../../hooks/useLenisScroll"

const NavbarLinks = ({ children, link, active = false }) => {
  const { scrollTo } = useLenisScroll()

  const handleClick = (e) => {
    e.preventDefault()
    scrollTo(link)
  }

  return (
    <a
      href={link}
      onClick={handleClick}
      className="group relative w-max"
    >
      <span className="cursor-pointer transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      {/* Underline — violet saat hover, putih saat active section */}
      <span
        className={`
          absolute -bottom-1 left-0 h-0.5 transition-all duration-300
          ${active
            ? "w-full bg-white"           // section aktif → putih penuh
            : "w-0 bg-violet-500 group-hover:w-full"  // hover → violet
          }
        `}
      />
    </a>
  )
}

export default NavbarLinks
