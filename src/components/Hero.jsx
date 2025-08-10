import React, { useState } from "react";
import { characters } from "../data";
import { resonanceIcons } from "../data";
import { AnimatedContent } from "./AnimatedContent";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResonance, setSelectedResonance] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredCharacters = characters.filter((char) => {
    const matchName = char.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchResonance =
      selectedResonance === "" ||
      (Array.isArray(char.resonance)
        ? char.resonance.some(
            (r) => r.toLowerCase() === selectedResonance.toLowerCase()
          )
        : char.resonance.toLowerCase() === selectedResonance.toLowerCase());

    return matchName && matchResonance;
  });

  const handleSelectResonance = (name) => {
    setSelectedResonance(name);
    setDropdownOpen(false);
  };

  return (
    <div className="text-white">
      <section
        id="more-content"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      >
        {/* Judul */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center font-cinzel bg-gradient-to-r from-yellow-300 via-white to-yellow-600 bg-clip-text text-transparent drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] mb-8">
          Meet the Resonators
        </h2>

        {/* Search + Custom Dropdown */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 relative">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              className="pl-10 pr-4 py-2 rounded-md text-white border border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-800/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-12 h-10 border border-gray-600 rounded-md bg-gray-800/50 p-2 hover:border-cyan-400"
            >
              {selectedResonance ? (
                <img
                  src={
                    resonanceIcons.find((r) => r.name === selectedResonance)
                      ?.img
                  }
                  alt={selectedResonance}
                  className="w-8 h-8 object-contain mx-auto"
                />
              ) : (
                <span className="text-gray-400 text-xs">All</span>
              )}
              <FiChevronDown className="text-gray-400 ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-md shadow-lg p-2 z-50">
                {/* Option All */}
                <button
                  onClick={() => handleSelectResonance("")}
                  className="w-full flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <span className="text-white">All</span>
                </button>

                {/* Resonance Options */}
                {resonanceIcons.map((res) => (
                  <button
                    key={res.name}
                    onClick={() => handleSelectResonance(res.name)}
                    className="w-full flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                  >
                    <img
                      src={res.img}
                      alt={res.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-white">{res.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
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
                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-400/40 shadow-md hover:shadow-cyan-500/10 transition-all duration-400 hover:scale-[1.03] group">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={char.img}
                      alt={`Character ${char.name}`}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-4 text-white group-hover:text-cyan-300 transition-colors">
                    {char.name}
                  </h3>
                  <p className="text-sm italic text-gray-400 mb-3">
                    {char.role}
                  </p>
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
