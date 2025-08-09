import React from "react";
import { characters } from "../data";
import { AnimatedContent } from "./AnimatedContent";

function Hero() {
  return (
    <div className="text-white">
      <section
        id="more-content"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      >
        {/* Judul */}
        <h2
          className="text-4xl md:text-5xl font-bold font-cinzel text-center mb-16 
                       bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent 
                       drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]"
        >
          Meet the Resonators
        </h2>

        {/* Grid karakter */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {characters.map((char, index) => (
            <AnimatedContent
              key={char.id}
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.02}
              threshold={0.2}
              delay={index * 0.15}
            >
              <div
                className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 
                              border border-gray-800 hover:border-cyan-400/40 
                              shadow-md hover:shadow-cyan-500/10 
                              transition-all duration-400 hover:scale-[1.03] group"
              >
                {/* Gambar */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={char.img}
                    alt={`Character ${char.name}`}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Nama & Role */}
                <h3 className="text-lg font-semibold mt-4 text-white group-hover:text-cyan-300 transition-colors">
                  {char.name}
                </h3>
                <p className="text-sm italic text-gray-400 mb-3">{char.role}</p>

                {/* Deskripsi */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {char.desc}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
