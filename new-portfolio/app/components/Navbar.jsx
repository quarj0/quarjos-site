"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Education", href: "/education" },
    { name: "Certifications", href: "/certifications" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white relative z-30">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/"
          className="text-xs sm:text-sm bg-blue-700 px-3 py-1 rounded hover:bg-blue-800 transition"
        >
          QUARJO PORTFOLIO
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className="absolute top-4 right-4 z-20 sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FiX className="w-8 h-8 transition-transform transform rotate-180 duration-300" />
        ) : (
          <FiMenu className="w-8 h-8 transition-transform transform rotate-0 duration-300" />
        )}
      </div>

      {/* Desktop Nav */}
      <nav className="flex justify-center items-center px-4 sm:px-8 py-4">
        <ul className="hidden sm:flex space-x-8 md:space-x-6 uppercase text-sm tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-2/3 bg-black bg-opacity-95 flex flex-col items-center py-20 space-y-8 sm:hidden transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-lg hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
