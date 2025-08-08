import React from "react";
import { characters } from "../data";

function Hero() {
  return (
    <div className="text-white">
      <section
        id="more-content"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      >
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Meet the Resonators
        </h2>

        {/* Grid karakter */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-10">
          {characters.map((char) => (
            <div
              key={char.id}
              className="bg-gray-900/70 rounded-xl p-4 border border-gray-800 hover:border-cyan-400/40 shadow-md hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Gambar */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={char.img}
                  alt={`Character ${char.name}`}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Nama & Role */}
              <h3 className="text-xl font-semibold mt-4 text-cyan-300">
                {char.name}
              </h3>
              <p className="text-sm italic text-gray-400 mb-3">{char.role}</p>

              {/* Deskripsi */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {char.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
