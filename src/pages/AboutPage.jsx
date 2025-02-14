"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-48 font-quicksand bg-gradient-to-tr from-[#D0CABA] to-[#D3C6B6]">
      <hr className="w-32 mx-auto mb-8 border-t-4 border-[#A67B5B] opacity-75" />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Meet Abe</h1>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
          I'm a lifelong artist dedicated to bringing creativity to life. With over a decade of experience, I specialize in both creating art and inspiring others to explore their artistic journey.
        </p>
        <hr className="w-32 mx-auto my-8 border-t-4 border-[#A67B5B]" />
        <img
          src="https://www.annascaul.ie/wp-content/uploads/2016/05/abe.jpg"
          alt="Abe in the studio"
          className="rounded-xl mx-auto shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>

      {/* Biography Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
            <hr className="w-24 border-t-4 border-[#A67B5B] mb-6" />
            <p className="text-lg text-gray-800 leading-relaxed">
              My artistic journey began as a child, captivated by the ability to tell stories through shapes, colors, and textures. Over the years, I refined my skills, earning a degree in Fine Arts at [Art School]. From traditional painting to digital media, I've embraced many forms of artistic expression.
            </p>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              I've had the privilege to exhibit my work in galleries and collaborate with various organizations, but my greatest passion lies in teaching. Helping others unlock their creative potential is deeply rewarding to me.
            </p>
          </div>
          {/* Hover Effect on Image */}
          <div className="relative group">
            <img
              src="https://www.annascaul.ie/wp-content/uploads/2015/04/Abe-Boland-3.jpg"
              alt="Abe's artwork in progress"
              className="w-full rounded-2xl shadow-lg transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <h2 className="text-2xl font-bold">Abe at Work</h2>
              <p className="mt-2 text-sm text-gray-200">Bringing imagination to life.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Philosophy Section */}
      <div className="bg-[#b5aa99] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Philosophy</h2>
          <hr className="w-24 mx-auto border-t-4 border-[#A67B5B] mb-6" />
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            I believe that art is for everyone. Whether you're a beginner or an experienced artist, you have the potential to create something meaningful. My goal is to provide a safe, supportive, and inspiring environment where students can explore their creativity without fear of judgment.
          </p>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            In my classes, I emphasize both technical skills and self-expression. I encourage students to experiment, make mistakes, and discover their own unique artistic voice.
          </p>
          <a href="./lessons" className="cursor-pointer font-bold text-lg leading-relaxed max-w-3xl mx-auto">Read more about my classes here.</a>
        </div>
      </div>

      {/* Featured Art Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
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
    </div>
  );
}
