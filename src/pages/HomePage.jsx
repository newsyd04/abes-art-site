"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bg from "../assets/painting-bg.jpg"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen w-full flex items-center z-0 justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="p-6 max-w-6xl mx-auto relative z-50 w-full text-center">
          <h1 className="text-5xl md:text-8xl font-extrabold text-gray-300 animate-fade-in">
            Abe's Art Studio
          </h1>
          <p className="mt-6 font-medium text-lg md:text-xl font-quicksand text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Bringing creativity to life through vibrant colors <br /> and captivating Artworks.
          </p>
          <a
            href="./artworks"
            className="inline-block bg-[#E07A5F] hover:bg-[#D45A3C] text-white px-10 font-quicksand py-4 mt-10 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            See My Artwork
          </a>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 opacity-30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-300 opacity-40 rounded-full filter blur-xl animate-float-slower" />

        {/* Scroll-down Icon */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50">
          <a
            href="#featured-section"
            className="flex items-center justify-center w-12 h-12 bg-gray-300 text-gray-900 rounded-full shadow-lg hover:bg-gray-400 transition"
          >
            <i className="fa-solid fa-arrow-down text-xl"></i>
          </a>
        </div>
      </div>

      {/* Featured Art Section */}
      <div id="featured-section" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Artworks</h2>
        <hr className="w-32 mx-auto border-t-4 border-[#A67B5B] mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Abstract Landscape", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08z8EaYiA6hsi2PwO6JcOHidwYtScdVAiaNEcSeK8i7OzEYGOMP8oS2cCZOH9atLVtAk&usqp=CAU" },
            { title: "Portrait Study", img: "https://scontent.fdub6-1.fna.fbcdn.net/v/t39.30808-6/449697732_1281497416154805_3757539237154008125_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ufO-b-KTeCgQ7kNvgH0mNte&_nc_oc=AdiirS9jiXu_RUHiDPea1_yUC_7lEEI2OqkcALronEWhZVlIJlMSk8d7mtevSLuwQsQ&_nc_zt=23&_nc_ht=scontent.fdub6-1.fna&_nc_gid=Aw1mOjL-u2Rdf4HITmkLz25&oh=00_AYD8iAXM0_ffPDcQFkpl2G_2AyJBR0_la6uxXjYW07V0iw&oe=67B54B43" },
            { title: "Surreal Dreams", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZ2CT9pMWNnBHBPhQlFtAamVrNJLcenmMyg&s" },
          ].map((art, index) => (
            <div key={index} className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
              <img src={art.img} alt={art.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{art.title}</h3>
                <p className="text-gray-300 text-sm mt-2">Blending fantasy and reality to spark imagination.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
