import React, { useState } from "react";
import { characters } from "../data";
import { AnimatedContent } from "./AnimatedContent";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Filter karakter berdasarkan pencarian nama
  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white">
      <section
        id="more-content"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      >
        {/* Judul di tengah */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center font-cinzel
             bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
             drop-shadow-lg mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Meet the Resonators
        </h2>

        {/* Input pencarian di kanan */}
        <div className="flex justify-end mb-12">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 rounded-md text-white border border-gray-600
              w-full max-w-78 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid karakter */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredCharacters.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">
              No characters found.
            </p>
          ) : (
            filteredCharacters.map((char, index) => (
              <AnimatedContent
                key={char.id}
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.02}
                threshold={0.2}
                delay={index * 0.12}
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
                  <p className="text-sm italic text-gray-400 mb-3">
                    {char.role}
                  </p>

                  {/* Deskripsi */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {char.desc}
                  </p>
                </div>
              </AnimatedContent>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Hero;
