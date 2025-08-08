import React, { useState } from "react";
import { videos } from "../data";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].src);

  return (
    <div className="font-sans text-white scroll-smooth">
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          key={currentVideo}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2] transition-opacity duration-700"
          src={currentVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Elegant Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-[-1]" />

        {/* Thumbnail Selector at Bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-5 z-20 px-4">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentVideo(vid.src)}
            >
              {/* Glow Effect */}
              <div className="relative">
                <img
                  src={vid.thumb}
                  alt={vid.name}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-white/80 shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/0 group-hover:ring-cyan-300/80 group-hover:blur-sm transition-all duration-300"></div>
              </div>

              {/* Floating Name */}
              <span className="absolute bottom-full mb-2 bg-gradient-to-r from-cyan-600/90 to-blue-600/90 backdrop-blur-sm text-white text-xs md:text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
                {vid.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold font-cinzel tracking-wide drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Wuthering Wave
          </h1>

          {/* Elegant Button */}
          <a
            href="#more-content"
            className="mt-12 group relative inline-block focus:outline-none"
          >
            <button className="relative z-10 flex items-center gap-3 px-10 py-4 text-lg font-medium tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-700 to-purple-700 rounded-full shadow-lg group-hover:scale-105 group-hover:shadow-cyan-400/40">
              <span className="relative z-10">Explore Characters</span>
            </button>
            {/* Glow hover effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-700 to-purple-700 opacity-30 blur-lg group-hover:opacity-60 transition duration-300"></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
