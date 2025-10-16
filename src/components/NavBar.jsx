import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHome ? "text-white" : "text-black"
        } bg-transparent`}
      >
        <div className="container mx-auto px-6 lg:px-32 py-8 flex justify-between items-center relative">
          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-3xl ${
              isHome ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Brand */}
          <div
            className={`text-4xl font-comforter font-semibold cursor-pointer 
              absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0
            `}
            onClick={() => handleNavigation("/")}
          >
            Abe’s Art Studio
          </div>

          {/* Desktop Nav Links */}
          <ul
            className={`hidden md:flex space-x-10 text-xl font-medium font-quicksand items-center ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            {["about", "artworks", "lessons", "contact"].map((link) => (
              <li
                key={link}
                onClick={() => handleNavigation(`/${link}`)}
                className="cursor-pointer hover:underline decoration-[#D45A3C] underline-offset-4 capitalize"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#D0CABA] flex flex-col justify-center items-center z-[9999] transition-opacity duration-300 opacity-100">
          <button
            className="absolute top-8 left-6 text-gray-900 text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="text-gray-900 text-center text-3xl space-y-8 font-quicksand">
            {["about", "artworks", "lessons", "contact"].map((link) => (
              <li
                key={link}
                onClick={() => handleNavigation(`/${link}`)}
                className="hover:underline decoration-[#946B53] underline-offset-4 capitalize"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
