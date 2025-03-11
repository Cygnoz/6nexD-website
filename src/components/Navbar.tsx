import { useEffect, useRef, useState } from "react";
import sixnexdlogo from "../assets/images/6nexD.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null); // Ref for the drawer

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close drawer if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex justify-center w-full mt-2">
      <nav className="flex flex-wrap items-center justify-between rounded-lg px-4 py-1 bg-[#202020CC] bg-opacity-80 w-full max-w-7xl">
        {/* Logo */}
        <button className="flex items-center">
          <img src={sixnexdlogo} alt="6Nexd Logo" className="h-8" />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex bg-[#25252533] px-2 rounded-lg items-center gap-8">
          <NavLinks />
        </div>

        {/* Sign Up Button */}
        <button className="hidden md:block px-2 py-2">
          <p className="text-3xl bg-custom-gradient font-sans bg-clip-text text-transparent">
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

        {/* Mobile Menu - Right to Left Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div> // Background Blur
        )}

        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 w-2/3 h-full bg-[#10101085] p-6 transition-transform duration-700 ease-in-out transform z-50
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <NavLinks mobile />
          <button className="w-full text-left px-2 py-2 mt-4">
            <p className="bg-gradient-to-r from-blue-600 via-green-500 text-3xl font-sans to-indigo-400 bg-clip-text text-transparent">
              Sign Up
            </p>
          </button>

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✖
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
