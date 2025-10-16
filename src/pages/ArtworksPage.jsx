"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ArtworksPage() {
  const [artworks, setArtworks] = useState([]);
  const [filter, setFilter] = useState("newest");
  const [loading, setLoading] = useState(true);

  const API_BASE = "https://webdev-backends.onrender.com/abe";

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await axios.get(`${API_BASE}/images`);
        setArtworks(res.data);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();

    document.title = "Artworks - Abe's Art Studio";
    window.scrollTo(0, 0);
  }, []);

  // ✅ Extract timestamp from MongoDB ObjectId
  const getTimestampFromId = (id) =>
    new Date(parseInt(id.substring(0, 8), 16) * 1000);

  // ✅ Proper sorting logic
  const sortedArtworks = [...artworks].sort((a, b) =>
    filter === "newest"
      ? getTimestampFromId(b._id) - getTimestampFromId(a._id)
      : getTimestampFromId(a._id) - getTimestampFromId(b._id)
  );

  return (
    <main
      className="min-h-screen text-[#3C322B] font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundColor: "#F1EEE6",
      }}
    >
      {/* Header */}
      <section className="pt-40 pb-8 px-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl md:text-[2.6rem] font-[Playfair_Display] text-[#2E2520] leading-tight tracking-wide">
            Recent Works
          </h1>
          <p className="mt-2 text-[0.95rem] text-[#5C5247] max-w-md leading-relaxed">
            A curated selection of paintings exploring stillness, texture, and
            light — works that reflect quiet beauty in everyday moments.
          </p>
        </div>

        {/* Filter Buttons */}
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

      <hr className="max-w-7xl mx-auto border-t border-[#D8D0C2] opacity-60 mb-12" />

      {/* Masonry Grid */}
      {loading ? (
        <p className="text-center text-[#5C5247] mt-20 text-lg italic">
          Loading artworks…
        </p>
      ) : artworks.length === 0 ? (
        <p className="text-center text-[#5C5247] mt-20 text-lg italic">
          No artworks uploaded yet.
        </p>
      ) : (
        <section className="max-w-7xl mx-auto px-6 pb-28 columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {sortedArtworks.map((art) => (
            <figure
              key={art._id}
              className="break-inside-avoid group relative bg-[#FCFCFC]/90 p-2 rounded-2xl shadow-sm ring-1 ring-[#EAE4DA] hover:ring-[#C9B79F] overflow-hidden transition"
            >
              <div className="relative overflow-hidden rounded-xl">
                {/* Image */}
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.05]"
                />

                {/* Hover Overlay — only visible on desktop */}
                <div className="hidden md:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-end justify-center pb-4">
                  <h2 className="text-white text-sm font-medium text-center px-3 drop-shadow-sm bg-black/30 rounded-md py-1">
                    {art.title || "Untitled"}
                  </h2>
                </div>
              </div>

              {/* Mobile Title (always visible) */}
              <figcaption className="md:hidden text-center text-sm text-[#2E2520] font-medium mt-2">
                {art.title || "Untitled"}
              </figcaption>
            </figure>
          ))}
        </section>
      )}
    </main>
  );
}
