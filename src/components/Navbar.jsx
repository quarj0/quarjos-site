import { useState } from "react";
import { Link } from "react-router-dom";
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
          to="/"
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
          <Link to="/about">
            <li className="hover:text-blue-400 cursor-pointer">About me</li>
          </Link>
          <Link to="/education">
            <li className="hover:text-blue-400 cursor-pointer">Education</li>
          </Link>
          <Link to="/certifications">
            <li className="hover:text-blue-400 cursor-pointer">Certifications</li>
          </Link>
          <Link to="/experience">
            <li className="hover:text-blue-400 cursor-pointer">Experience</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </Link>
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
              to="/about"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              to="/education"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              to="/certifications"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Cerifications
            </Link>
            <Link
              to="/experience"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="text-white text-lg hover:text-blue-400"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
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
