import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import logo from "../assets/art-logo.jpg";

export default function Navbar({ mode = "light" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(mode); // Default to the passed mode
  const navigate = useNavigate(); // React Router navigation

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // Change theme when navigating
  const handleNavigation = (path, newMode) => {
    setTheme(newMode); // Update theme before navigation
    setIsMenuOpen(false); // Close menu
    navigate(path); // Navigate to the new page
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`absolute top-0 left-0 right-0 z-50 bg-transparent ${theme === "dark" ? "text-white" : "text-black"}`}>
        <div className="container mx-auto px-6 lg:px-32 py-8 flex justify-between items-center relative">
          
          {/* Mobile Hamburger Menu (Left) */}
          <button className={`md:hidden text-3xl ${theme === "dark" ? "text-white" : "text-black"}`} onClick={() => setIsMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Mobile - Centered "Abe's Art Studio" */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
            <span onClick={() => handleNavigation("/", "dark")} className={`text-4xl font-comforter cursor-pointer font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Abe's Art Studio
            </span>
          </div>

          {/* Desktop - "Abe's Art Studio" on Left */}
          <div className="hidden md:flex text-lg font-bold py-4">
            <span onClick={() => handleNavigation("/", "dark")} className={`text-4xl font-comforter cursor-pointer font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Abe's Art Studio
            </span>
          </div>

          {/* Desktop Menu - Centered */}
          <ul className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-xl font-medium font-quicksand items-center ${theme === "dark" ? "text-white" : "text-black"}`}>
            <li><span onClick={() => handleNavigation("/about", "light")} className="cursor-pointer transition decoration-2 underline-offset-4 decoration-[#D45A3C] hover:underline">About Me</span></li>
            <li><span onClick={() => handleNavigation("/artworks", "light")} className="cursor-pointer transition decoration-2 underline-offset-4 decoration-[#D45A3C] hover:underline">Artworks</span></li>
            <li><span onClick={() => handleNavigation("/lessons", "light")} className="cursor-pointer transition decoration-2 underline-offset-4 decoration-[#D45A3C] hover:underline">Lessons</span></li>
            <li><span onClick={() => handleNavigation("/contact", "light")} className="cursor-pointer transition decoration-2 underline-offset-4 decoration-[#D45A3C] hover:underline">Contact</span></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay Menu - Neutral Background */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#D0CABA] flex flex-col justify-center items-center z-50">
          
          {/* Close Button (Top Left) */}
          <button className="absolute top-8 left-6 text-gray-900 text-3xl" onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* "Abe's Art Studio" - Always Centered in Menu */}
          <div className="absolute text-4xl font-comforter top-8 left-1/2 transform -translate-x-1/2 text-gray-900 font-semibold">
            Abe's Art Studio
          </div>

          {/* Menu Links - Positioned Below */}
          <ul className="text-gray-900 text-center text-3xl space-y-8 font-quicksand absolute bottom-1/2 transform translate-y-1/2">
            <li><span onClick={() => handleNavigation("/about", "light")} className="cursor-pointer decoration-2 underline-offset-4 decoration-[#946B53] hover:underline hover:text-gray-700 transition">About Me</span></li>
            <li><span onClick={() => handleNavigation("/artworks", "light")} className="cursor-pointer decoration-2 underline-offset-4 decoration-[#946B53] hover:underline hover:text-gray-700 transition">Artworks</span></li>
            <li><span onClick={() => handleNavigation("/lessons", "light")} className="cursor-pointer decoration-2 underline-offset-4 decoration-[#946B53] hover:underline hover:text-gray-700 transition">Lessons</span></li>
            <li><span onClick={() => handleNavigation("/contact", "light")} className="cursor-pointer decoration-2 underline-offset-4 decoration-[#946B53] hover:underline hover:text-gray-700 transition">Contact</span></li>
          </ul>
        </div>
      )}
    </>
  );
}
