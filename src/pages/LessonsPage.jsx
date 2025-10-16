"use client";
import React from "react";
import "./GradientAnimation.css";
import Brushstroke from "../components/Brushstroke";
import { useEffect } from "react";

export default function LessonsPageGradient() {
  useEffect(() => {
    document.title = "Art Lessons - Abe's Art Studio";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const lessonPhotos = [
    {
      id: 1,
      title: "Beginner Workshop",
      image: "https://placehold.co/600x600",
      description:
        "Students exploring foundational techniques and composition.",
    },
    {
      id: 2,
      title: "Advanced Portrait Class",
      image: "https://placehold.co/600x600",
      description:
        "Capturing light, tone, and character through portraiture.",
    },
    {
      id: 3,
      title: "Summer Art Camp",
      image: "https://placehold.co/600x600",
      description:
        "A creative summer program full of color, fun, and collaboration.",
    },
    {
      id: 4,
      title: "Creative Exploration Series",
      image: "https://placehold.co/600x600",
      description:
        "An experimental set of sessions exploring new techniques and mixed media.",
    },
  ];

  const handleScroll = () => {
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden font-[Poppins] text-[#3C322B]"
      style={{
        backgroundColor: "#F1EEE6",
      }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-0">
        {/* Gradient background */}
        <div className="absolute inset-0 h-[900px] gradient-overlay z-0"></div>

        {/* Hero content */}
        <div className="relative text-center px-8 z-10 pt-24 pb-48">
          <h1 className="text-5xl md:text-[2.8rem] font-[Playfair_Display] leading-tight text-[#2E2520] drop-shadow-sm">
            Art Lessons with Abe
          </h1>
          <hr className="w-24 mx-auto mt-6 border-t-4 border-[#E07A5F]/70 rounded-full opacity-80" />
          <p className="mt-6 text-lg text-[#4B4036]/90 max-w-2xl mx-auto leading-relaxed">
            Explore painting through color, movement, and light — Abe’s classes
            are an immersive journey into creative expression.
          </p>

          {/* Scroll Down Button */}
          <button
            onClick={handleScroll}
            className="mt-12 inline-flex flex-col bg-white/90 rounded-full p-4 px-5 items-center text-[#2E2520] hover:text-[#E07A5F] transition-colors duration-300 shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Full visible gradient wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-[5]">
          <svg
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[400px]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffb86c" />
                <stop offset="25%" stopColor="#ff6fb1" />
                <stop offset="50%" stopColor="#ff9a3c" />
                <stop offset="75%" stopColor="#ff61d2" />
                <stop offset="100%" stopColor="#ffb76b" />
              </linearGradient>
            </defs>
            <path
              d="M0,280 C300,400 800,160 1440,300 L1440,400 L0,400 Z"
              fill="#F1EEE6"
            ></path>
          </svg>
        </div>
      </section>

      {/* Info Section */}
      <section
        id="info-section"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-12 pb-24"
      >
        <div className="bg-white/80 backdrop-blur-sm ring-1 ring-[#EAE4DA] rounded-3xl py-14 px-10 shadow-md relative">
          <Brushstroke />
          <p className="text-lg leading-[1.8] mb-10 text-[#4B4036]">
            Each class merges traditional techniques with bold experimentation.
            Abe’s lessons help you develop your artistic instincts through
            exploration and play.
          </p>

          <div className="bg-white/90 backdrop-blur-md ring-1 ring-[#EAE4DA] text-[#2E2520] rounded-2xl py-10 px-8 shadow-lg max-w-xl mx-auto">
            <p className="text-lg font-medium">
              To inquire about lessons or register:
            </p>
            <p className="text-2xl font-bold mt-4">+123-456-7890</p>
            <p className="text-[#4B4036]/80 text-sm mt-2">
              Classes available for all ages and experience levels.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 pb-28">
        <h2 className="text-center text-3xl md:text-4xl font-[Playfair_Display] text-[#2E2520] mb-12">
          In the Studio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {lessonPhotos.map((photo) => (
            <figure
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 bg-white/90 ring-1 ring-[#EAE4DA]"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04] rounded-xl"
              />
              <figcaption className="absolute inset-0 bg-[#E07A5F]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white text-center px-4">
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm">{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
