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
          into connection. With over three decades of experience, Abe brings warmth
          and artistry to every brushstroke, both in his paintings and in his
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
            Since then I've been a self-taught community artist since 1996, and specialise in a wide range of visual art practices. </p>
          <p className="text-lg text-[#4B4036] leading-relaxed">
            Over the years, I’ve exhibited my work in shows, collaborated
            with creative organizations, worked with neighborhood youth projects, primary and secondary school children, hosted private art lessons, and ran after school art for children. </p>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src={gallery}
            alt="Abe painting in his studio"
            className="w-full rounded-2xl shadow-md transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white rounded-2xl">
            <h2 className="text-2xl font-semibold">Studio Gallery Exhibition</h2>
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
            My Art Studio
          </h2>
          <Brushstroke />
          <p className="text-lg text-[#4B4036] leading-relaxed mb-6">
            Nestled in the heart of Annascaul, Co. Kerry, my art studio is a
            welcoming space where creativity flourishes. Here, I offer
            display of my latest works and occasional gallery events.
          </p>
          <p className="text-lg text-[#4B4036] leading-relaxed">
            Whether you’re an art enthusiast or simply curious, I invite you to
            visit the studio, explore my collections, and immerse yourself in
            the world of art.
          </p>
          <a
            href="./contact"
            className="inline-block mt-10 text-lg font-medium text-[#9C7A5C] hover:underline"
          >
            Get in touch today →
          </a>
        </div>
      </section>
    </main>
  );
}
