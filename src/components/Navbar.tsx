import { useState } from "react";
import sixnexdlogo from "../assets/images/6nexD.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center w-full mt-2">
      <nav className="flex flex-wrap items-center justify-between rounded-lg px-6 py-4 bg-[#202020CC] bg-opacity-80 w-full max-w-6xl">
        {/* Logo */}
        <button className="flex items-center">
          <img src={sixnexdlogo} alt="6Nexd Logo" className="h-8" />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* Sign Up Button */}
        <button className="hidden md:block px-2 py-2">
          <p className="bg-gradient-to-r from-blue-600 via-green-500 font-sans to-indigo-400 bg-clip-text text-transparent">
            Sign Up
          </p>
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-300 transition-transform duration-300 ease-in-out transform"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full mt-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <NavLinks mobile />
          <button className="w-full text-left px-2 py-2 mt-4">
            <p className="bg-gradient-to-r from-blue-600 via-green-500 font-sans to-indigo-400 bg-clip-text text-transparent">
              Sign Up
            </p>
          </button>
        </div>
      </nav>
    </div>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = `text-gray-300 font-sans hover:text-white transition-colors ${
    mobile ? "block py-2" : ""
  }`;

  return (
    <>
      <a href="#product" className={linkClass}>
        Product
      </a>
      <a href="#about" className={linkClass}>
        About
      </a>
      <a href="#service" className={linkClass}>
        Service
      </a>
      <a href="#blog" className={linkClass}>
        Blog
      </a>
      <a href="#contact" className={linkClass}>
        Contact
      </a>
    </>
  );
}

export default Navbar;
