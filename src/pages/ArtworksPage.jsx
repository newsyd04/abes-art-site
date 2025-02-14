"use client";
import React from "react";

export default function ArtworksPage() {
  const Artworks = [
    { id: 1, title: "Piece One", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITat_C1T3CECyZdR_zGcKPLvn0bcukaSY0w&s"},
    { id: 2, title: "Piece Two", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD4_lIdw_5X8CffEQtKh0FSjNjV01wFR8AA&s"},
    { id: 3, title: "Piece Three", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_YZuFYW2JTMGUQj-E0aBb7Aha6Go6VLR3w&s"},
    { id: 4, title: "Piece Four", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKASaan2iM-Qe-XxJbs0xoHvGgoFFxMRyQA&s"},
    { id: 5, title: "Piece Five", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_L8fzO5Kpt94bNHZNVhhoHqy9fV9qQofzQ&s"},
    { id: 6, title: "Piece Six", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Up1WEXeW26r-fdrr-u0_D2EfBfekSv_SPQ&s"},
    { id: 7, title: "Piece Seven", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRp3qk9DtbihrctzWbvCUPkHnoxd7bybbmrw&s"},
    { id: 8, title: "Piece Eight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnF0SmxypO4LK2NTAgP0Lez8VSvALLuacmcQ&s"},
  ];

  return (
    <div className="min-h-screen py-48 font-quicksand bg-gradient-to-tr from-[#D0CABA] to-[#D3C6B6]">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Artworks Collection</h1>
        <hr className="w-32 mt-6 mx-auto mb-8 border-t-4 border-[#A67B5B] opacity-75" />
        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed mt-4">
          Discover a selection of my finest artwork, each crafted with passion and creativity.
        </p>
      </div>

      {/* Masonry Grid Artworks Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(100px,_auto)] gap-4">
          {Artworks.map((piece) => (
            <div key={piece.id} className="relative">
              
              {/* Image */}
              <div className="relative group">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-auto object-contain rounded-xl shadow-md"
                />

                {/* Hover Overlay - Only Over Image */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center p-2 items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <h2 className="text-2xl font-bold">{piece.title}</h2>
                </div>
              </div>
              
              {/* No Overlay Here - Details Are Hidden by Default */}
            </div>
          ))}
        </div>
      </div>

      {/* Final Section for Custom Requests */}
      <div className="bg-[#b5aa99] py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Artwork Requests</h2>
          <hr className="w-24 mx-auto border-t-4 border-[#A67B5B] mb-6 opacity-75" />
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Looking for a unique, personalized piece? I accept custom commissions tailored to your vision. Whether it's a portrait, abstract composition, or conceptual artwork, I’d love to bring your ideas to life.
          </p>
        </div>
      </div>

    </div>
  );
}
