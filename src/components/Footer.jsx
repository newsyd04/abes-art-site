import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-[#2f3545] text-white py-16"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Abe's Art Studio</h3>
            <p className="text-gray-400 leading-relaxed">
              Bringing creativity to life through vibrant colors and captivating artworks. 
              Explore collections that celebrate emotion, nature, and the beauty of simplicity.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="./" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="./about" className="hover:text-gray-300 transition">About Me</a></li>
              <li><a href="./artworks" className="hover:text-gray-300 transition">Artworks</a></li>
              <li><a href="./lessons" className="hover:text-gray-300 transition">Lessons</a></li>
              <li><a href="./contact" className="hover:text-gray-300 transition">Contact</a></li>
              <li><a href="./login" className="hover:text-gray-300 transition">Admin Login</a></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>📍 Annascaul, Co. Kerry, Ireland</p>
              <p>📞 +353 87 297 5588</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:contact@abeartstudio.com"
                  className="hover:text-gray-300 transition"
                >
                  contact@abeartstudio.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Abe's Art Studio. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Designed and Developed by{" "}
            <a
              href="https://daranewso.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07A5F] hover:text-[#ff9f80] transition"
            >
              Dara Newsome
            </a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
