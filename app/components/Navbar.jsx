"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white relative">
      {/* Logo Section */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/"
          className="text-xs sm:text-sm bg-blue-700 px-2 py-1 rounded hover:bg-blue-800"
        >
          QUARJO PORTFOLIO
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FiX className="text-white w-8 h-8 transition-transform transform rotate-180 duration-300" />
        ) : (
          <FiMenu className="text-white w-8 h-8 transition-transform transform rotate-0 duration-300" />
        )}
      </div>

      <nav className="flex justify-center items-center px-4 sm:px-8  py-4">
        <ul className="hidden sm:flex space-x-8 md:space-x-4 md:ml-12 uppercase text-sm tracking-widest ">
          <li>
            <Link href="/about" className="hover:text-blue-400 cursor-pointer">
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className="hover:text-blue-400 cursor-pointer"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/certifications"
              className="hover:text-blue-400 cursor-pointer"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="hover:text-blue-400 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-2/3 h-screen bg-black bg-opacity-90 flex flex-col items-center py-16 space-y-6 sm:hidden z-10">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={toggleMenu}
            >
              &#10005;
            </button>
            <Link
              href="/about"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              href="/education"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              href="/certifications"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Cerifications
            </Link>
            <Link
              href="/experience"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
