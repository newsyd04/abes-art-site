"use client";
import React from "react";
import { useEffect } from "react";
import Brushstroke from "../components/Brushstroke";
import abepfp from "../assets/abepfp.jpg";
import gallery from "../assets/gallery.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Abe - Abe's Art Studio";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <main
      className="min-h-screen text-[#3C322B] font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundColor: "#F1EEE6",
      }}
    >
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <img
          src={abepfp}
          alt="Abe's Portrait"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-[2.7rem] font-[Playfair_Display] text-[#2E2520] leading-tight tracking-wide">
          Meet Abe
        </h1>
        <Brushstroke />
        <p className="mt-6 text-lg text-[#5C5247] max-w-2xl mx-auto leading-relaxed">
          Abe Boland is a lifelong artist dedicated to transforming creativity
          into connection. With over a decade of experience, Abe brings warmth
          and artistry to every brushstroke — both in his paintings and in his
          teaching.
        </p>
      </section>

      {/* Biography Section */}
      <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-1  lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] mb-4 text-[#2E2520]">
              My Journey
            </h2>
            <Brushstroke className="items-left" />
          </div>
          <p className="text-lg text-[#4B4036] leading-relaxed mb-6">
            My artistic journey began as a child, captivated by how shapes,
            colors, and textures could tell stories words never could.
          </p>
          <p className="text-lg text-[#4B4036] leading-relaxed">
            Over the years, I’ve exhibited my work in shows and collaborated
            with creative organizations, but my greatest joy has been sharing
            art with others — helping students unlock their own creative voices
            and confidence.
          </p>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src={gallery}
            alt="Abe painting in his studio"
            className="w-full rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white rounded-2xl">
            <h2 className="text-2xl font-semibold">Abe at Work</h2>
            <p className="mt-2 text-sm text-gray-200">
              Where inspiration meets canvas.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Banner */}
      <section className="relative z-10 w-full overflow-hidden my-10 md:my-16 animate-fadeIn">

        <img
          src={gallery2}
          alt="Abe’s Art Studio"
          className="w-full h-[180px] md:h-[280px] lg:h-[380px] object-cover shadow-inner ring-1 ring-[#EAE4DA]/60"
        />

      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-24 text-center px-6 bg-[#FFFFFF]/60 backdrop-blur-sm rounded-t-[2rem] mt-[-4rem] shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[#2E2520] mb-4">
            My Teaching Philosophy
          </h2>
          <Brushstroke />
          <p className="text-lg text-[#4B4036] leading-relaxed mb-6">
            I believe that art is for everyone. Whether you're picking up a
            brush for the first time or returning to an old passion, creativity
            thrives in the right environment. My teaching centers around
            patience, exploration, and self-expression.
          </p>
          <p className="text-lg text-[#4B4036] leading-relaxed">
            I encourage students to take risks, make mistakes, and celebrate the
            process as much as the final piece. In my studio, there’s no right
            or wrong — just curiosity and discovery.
          </p>
          <a
            href="./lessons"
            className="inline-block mt-10 text-lg font-medium text-[#9C7A5C] hover:underline"
          >
            Read more about my classes →
          </a>
        </div>
      </section>
    </main>
  );
}
