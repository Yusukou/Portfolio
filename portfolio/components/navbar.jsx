"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0057b8] shadow-xl" : "bg-[#0057b8]/90"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-white text-xl font-bold">Mon Portfolio</div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:items-center md:gap-4 text-white">
            {["Accueil", "À propos", "Languages", "Projets", "Contact", "CV"].map((item, index) => (
              <li key={index} className="hover:bg-blue-800 transition rounded px-3 py-1">
                <a
                  className="block text-center"
                  href={`#${
                    item === "accueil"
                      ? "accueil"
                      : item === "À propos"
                        ? "propos"
                        : item === "Languages"
                          ? "Languages"
                          : item === "Projets"
                            ? "projets"
                            : item === "Contact"
                              ? "contact"
                              : ""
                  }`}
                  {...(item === "CV" ? { href: "/assets/Cv Yusuf Yeni.pdf", download: true } : {})}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col bg-[#0057b8] text-white">
          {["Accueil", "À propos", "Languages", "Projets", "Contact", "CV"].map((item, index) => (
            <li key={index} className="border-t border-blue-700">
              <a
                className="block py-3 px-4 hover:bg-blue-800 transition"
                href={`#${
                  item === "Accueil"
                    ? "accueil"
                    : item === "À propos"
                      ? "propos"
                      : item === "Languages"
                        ? "Languages"
                        : item === "Projets"
                          ? "projets"
                          : item === "Contact"
                            ? "contact"
                            : ""
                }`}
                {...(item === "CV" ? { href: "/assets/Cv Yusuf Yeni.pdf", download: true } : {})}
                onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
