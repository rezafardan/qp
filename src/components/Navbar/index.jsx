// src/components/Navbar/index.jsx
import React, { useState, useEffect } from "react"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { t } = useTranslation()

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)

        // Deteksi section aktif — pakai logic yang handle section terakhir
        const sections = ["project", "profile", "contact"]
      const scrollPosition = window.scrollY + 500  // 120 = offset navbar + buffer

      // Cari section yang sedang dalam viewport
      let current = ""

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        if (el.offsetTop <= scrollPosition) {
          current = id  // update terus → section terakhir yang dilewati = aktif
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all ease-in-out duration-500
        ${scrolled
          ? "bg-neutral-900/95 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
        }
      `}
    >
      <div className="px-4 md:px-10 py-4 flex flex-row-reverse md:flex-row justify-between gap-4">
        <div className="hidden gap-6 text-sm items-center md:flex">
          <NavbarLinks
            link="#project"
            active={activeSection === "project"}
          >
            {t("navbar.navbar2")}
          </NavbarLinks>
          <NavbarLinks
            link="#profile"
            active={activeSection === "profile"}
          >
            {t("navbar.navbar1")}
          </NavbarLinks>
          <NavbarLinks
            link="#contact"
            active={activeSection === "contact"}
          >
            {t("navbar.navbar3")}
          </NavbarLinks>
        </div>

        <div className="group px-8 h-max relative">
          <div className="cursor-default">
            <p className="font-caveat font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest text-center">
              Reza Fardan
            </p>
            <p className="font-thin text-xs text-center">
              IT Network Infra | DevSecOps | Web Dev Enthusiast
            </p>
          </div>
          <div
            className="absolute hidden bg-violet-500 right-0 top-0 bottom-0 w-0 opacity-0 transition-all duration-500
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
  )
}

export default Navbar
