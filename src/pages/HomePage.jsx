"use client";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bg from "../assets/painting-bg.jpg";
import { Link } from "react-router-dom";
import gallery3 from "../assets/gallery3.jpg";
import samplepic from "../assets/samplepic.jpg";
import samplepic2 from "../assets/samplepic2.jpg";
import samplepic3 from "../assets/samplepic3.jpg";
import samplepic4 from "../assets/samplepic4.jpg";

export default function HomePage() {
  useEffect(() => {
    document.title = "Abe's Art Studio";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="p-6 max-w-6xl mx-auto relative z-50 w-full text-center">
          <h1 className="text-5xl md:text-8xl font-[Playfair_Display] font-bold text-gray-200 animate-fade-in tracking-tight">
            Abe’s Art Studio
          </h1>
          <p className="mt-6 text-lg md:text-xl font-[Poppins] text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Bringing creativity to life through vibrant colors <br /> and
            captivating works of art.
          </p>
          <Link
            to="/artworks"
            className="inline-block bg-[#E07A5F] hover:bg-[#D45A3C] text-white px-10 font-[Poppins] py-4 mt-10 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            See My Artwork
          </Link>
        </div>

        {/* Abstract Glow Elements */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-200 opacity-30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-amber-200 opacity-40 rounded-full filter blur-xl animate-float-slower" />
      </div>

      {/* Featured Art Section */}
      <section
        id="featured-section"
        className="max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-[Playfair_Display] text-[#2E2520] mb-6">
          Featured Works
        </h2>
        <hr className="w-24 mx-auto border-t-4 border-[#C9B79F] mb-12 rounded-full opacity-70" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Abstract Horizons",
              img: samplepic2,
            },
            {
              title: "City Study",
              img: samplepic,
            },
            {
              title: "Surreal Dreams",
              img: samplepic3,
            },
            {
              title: "Edge of the City",
              img: samplepic4,
            },
          ].map((art, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-500"
            >
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-gray-300 text-sm mt-2 max-w-xs px-4">
                  Blending imagination and emotion through brushwork.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Abe Section */}
      <section className="bg-[#F9F8F5] py-24 px-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img
            src={gallery3}
            alt="Abe painting"
            className="rounded-2xl shadow-md w-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-[Playfair_Display] text-[#2E2520] mb-4">
              About Abe
            </h2>
            <p className="text-[#5C5247] font-[Poppins] text-lg leading-relaxed mb-6">
              Based in the heart of Kerry, Abe Boland is a lifelong painter whose work
              explores stillness, texture, and the quiet beauty of nature. His
              art bridges the emotional and the observational, revealing subtle
              details of Irish landscapes and everyday life.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#E07A5F] hover:bg-[#D45A3C] text-white px-8 py-3 rounded-full text-lg font-[Poppins] transition shadow-sm hover:shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Unified Lessons & Contact Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#F5EFE6] via-[#F9F8F5] to-[#FAF9F6] px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Art Lessons */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-[Playfair_Display] text-[#2E2520] mb-4">
              Art Lessons
            </h2>
            <p className="text-[#5C5247] font-[Poppins] text-lg max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
              Abe offers art lessons for students of all ages and experience
              levels. From beginner classes to advanced workshops, learn to
              paint in a warm and inspiring environment that nurtures creativity.
            </p>
            <Link
              to="/lessons"
              className="inline-block bg-[#9C7A5C] hover:bg-[#7C5E45] text-white px-8 py-3 rounded-full text-lg font-[Poppins] transition shadow-md hover:shadow-lg"
            >
              Explore Lessons
            </Link>
          </div>

          {/* Get in Touch */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-[Playfair_Display] text-[#2E2520] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#5C5247] font-[Poppins] text-lg max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
              Interested in a collaboration or private lesson? Abe would love to
              hear from you. Reach out to discuss your ideas or schedule your
              first session.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#E07A5F] hover:bg-[#D45A3C] text-white px-8 py-3 rounded-full text-lg font-[Poppins] transition shadow-md hover:shadow-lg"
            >
              Contact Abe
            </Link>
          </div>
        </div>

        {/* Soft diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EDE6D9]/50 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
}
