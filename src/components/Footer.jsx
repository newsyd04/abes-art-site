import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2f3545] text-white py-16">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Abe's Art Studio</h3>
            <p className="text-gray-400">
              Bringing creativity to life through vibrant colors and captivating artworks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="./" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="./about" className="hover:text-gray-300 transition">About Me</a></li>
              <li><a href="./artworks" className="hover:text-gray-300 transition">Artworks</a></li>
              <li><a href="./lessons" className="hover:text-gray-300 transition">Lessons</a></li>
              <li><a href="./contact" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">📍 Annascaul, Co. Kerry, Ireland</p>
            <p className="text-gray-400">📞 +123-456-7890</p>
            <p className="text-gray-400">✉️ <a href="mailto:contact@abeartstudio.com" className="hover:text-gray-300">contact@abeartstudio.com</a></p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>© {new Date().getFullYear()} Abe's Art Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-facebook text-2xl"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-instagram text-2xl"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-twitter text-2xl"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-linkedin text-2xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
