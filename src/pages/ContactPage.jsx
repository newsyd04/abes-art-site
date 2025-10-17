"use client";
import React from "react";
import Brushstroke from "../components/Brushstroke";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact - Abe's Art Studio";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center text-[#3C322B] font-[Poppins] px-6 py-32"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundColor: "#F1EEE6",
      }}
    >
      {/* Contact Card */}
      <div className="max-w-xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-md p-14 text-center ring-1 ring-[#EAE4DA]">
        {/* Heading */}
        <h1 className="text-4xl md:text-[2.5rem] font-[Playfair_Display] text-[#2E2520] mb-4">
          Get in Touch
        </h1>
        <Brushstroke />
        <p className="text-lg text-[#5C5247] leading-relaxed mb-10">
          Reach out to me for inquiries about purchasing, collaborations, or
          artwork commissions. I’d love to hear from you and discuss your ideas.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <i className="fa-solid fa-phone text-2xl text-[#9C7A5C]"></i>
            <p className="text-xl font-medium text-[#2E2520]">
              +353-87-297-5588
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <i className="fa-solid fa-envelope text-2xl text-[#9C7A5C]"></i>
            <a className="text-xl font-medium text-[#2E2520]" href="mailto:artabraham63@gmail.com">
              artabraham63@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <i className="fa-solid fa-map-marker-alt text-2xl text-[#9C7A5C]"></i>
            <p className="text-xl font-medium text-[#2E2520]">
              Annascaul, Co. Kerry
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-20 mx-auto my-10 border-t-2 border-[#E8E2D9] rounded-full opacity-60" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/people/Irish-Artist-Abe-Boland/100028836773416/"
            className="text-[#9C7A5C] text-2xl hover:text-[#7B5E45] transition"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/abe.boland/"
            className="text-[#9C7A5C] text-2xl hover:text-[#7B5E45] transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </main>
  );
}
