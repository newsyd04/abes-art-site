"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function ArtworksPage() {
  const artworksData = [
    { id: 1, title: "Coastal Quiet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITat_C1T3CECyZdR_zGcKPLvn0bcukaSY0w&s", year: 2023 },
    { id: 2, title: "Soft Morning", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD4_lIdw_5X8CffEQtKh0FSjNjV01wFR8AA&s", year: 2024 },
    { id: 3, title: "Low Tide", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_YZuFYW2JTMGUQj-E0aBb7Aha6Go6VLR3w&s", year: 2022 },
    { id: 4, title: "Evening Calm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITat_C1T3CECyZdR_zGcKPLvn0bcukaSY0w&s", year: 2023 },
    { id: 5, title: "Silent Field", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD4_lIdw_5X8CffEQtKh0FSjNjV01wFR8AA&s", year: 2024 },
    { id: 6, title: "Distant Shore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_YZuFYW2JTMGUQj-E0aBb7Aha6Go6VLR3w&s", year: 2021 },
    { id: 7, title: "Winter Air", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_YZuFYW2JTMGUQj-E0aBb7Aha6Go6VLR3w&s", year: 2022 },
    { id: 8, title: "Golden Path", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD4_lIdw_5X8CffEQtKh0FSjNjV01wFR8AA&s", year: 2023 },
  ];

  const [filter, setFilter] = useState("newest");

  const sortedArtworks = [...artworksData].sort((a, b) =>
    filter === "newest" ? b.year - a.year : a.year - b.year
  );

  useEffect(() => {
    document.title = "Artworks - Abe's Art Studio";
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
      {/* Header Section */}
      <section className="pt-40 pb-8 px-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
        {/* Left: Title + Subtitle */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl md:text-[2.6rem] font-[Playfair_Display] text-[#2E2520] leading-tight tracking-wide">
            Recent Works
          </h1>
          <p className="mt-2 text-[0.95rem] text-[#5C5247] max-w-md leading-relaxed">
            A curated selection of paintings exploring stillness, texture, and
            light — works that reflect quiet beauty in everyday moments.
          </p>
        </div>

        {/* Right: Filter Bar */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <div className="inline-flex items-center gap-3 bg-white/80 shadow-sm backdrop-blur-sm ring-1 ring-[#E8E2D9] rounded-full px-6 py-2">
            {["newest", "oldest"].map((id) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`px-3 py-1 text-sm font-medium transition ${
                  filter === id
                    ? "text-[#2E2520] font-semibold"
                    : "text-[#7A7065] hover:text-[#2E2520]"
                }`}
              >
                {id === "newest" ? "Newest" : "Oldest"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="max-w-7xl mx-auto border-t border-[#D8D0C2] opacity-60 mb-12" />

      {/* Artworks Grid */}
      <section className="max-w-7xl mx-auto px-10 pb-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {sortedArtworks.map((art) => (
          <figure
            key={art.id}
            className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-[#FCFCFC]/90 ring-1 ring-[#EAE4DA] hover:ring-[#C9B79F] p-2"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03] rounded-xl"
            />
            <figcaption className="pt-3 text-center px-2">
              <h2 className="text-base font-medium text-[#2E2520]">
                {art.title}
              </h2>
              <p className="text-xs text-[#6E645A] italic">
                Mixed Media • {art.year}
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
