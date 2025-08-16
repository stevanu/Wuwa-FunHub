import React, { useState, useEffect, useRef } from "react";
import { characters } from "../data";
import { resonanceIcons } from "../data";
import { AnimatedContent } from "./AnimatedContent";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResonance, setSelectedResonance] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="card-con text-white">
      <section
        id="more-content"
        className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 "
      >
        {/* Judul */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center font-cinzel 
        bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text
         text-transparent drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)] mb-16"
        >
          Meet the Resonators
        </h2>

        {/* Search + Custom Dropdown */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 relative">
          {/* Search */}
          <div className="relative w-78 sm:max-w-xs">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400" />
            <input
              type="text"
              placeholder="Search by name..."
              className="pl-10 pr-4 py-2 rounded-md text-white border border-yellow-500/40 w-full 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-900/60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Custom Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-26 h-10 border border-yellow-500/40 rounded-md
               bg-gray-900/60 p-2 hover:border-yellow-400 transition-colors"
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
                <span className="text-gray-400 text-xs">Resonance</span>
              )}
              <FiChevronDown className="text-yellow-400 ml-1" />
            </button>

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-gray-950 border border-yellow-500/40 
              rounded-md shadow-lg p-2 z-50"
              >
                {/* Option All */}
                <button
                  onClick={() => handleSelectResonance("")}
                  className="w-full flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
                >
                  <span className="text-white">All</span>
                </button>

                {/* Resonance Options */}
                {resonanceIcons.map((res) => (
                  <button
                    key={res.name}
                    onClick={() => handleSelectResonance(res.name)}
                    className="w-full flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
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
        <div className="card grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredCharacters.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">
              No characters found.
            </p>
          ) : (
            filteredCharacters.map((char, index) => {
              const resonanceName = Array.isArray(char.resonance)
                ? char.resonance[0]?.toLowerCase()
                : char.resonance?.toLowerCase();

              const resonanceLogo = resonanceIcons.find(
                (r) => r.name.toLowerCase() === resonanceName
              );

              return (
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
                  <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black backdrop-blur-md rounded-xl p-4 border border-yellow-500/40 hover:border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-[1.03] group overflow-hidden">
                    {/* Layer glow di belakang gambar */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]" />
                    </div>

                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Foto karakter dengan logo resonance pojok kanan bawah */}
                    <Link
                      to={`/character/${char.id}`}
                      className="block relative z-10"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={char.img}
                          alt={`Character ${char.name}`}
                          className="w-full h-72 sm:h-70 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {resonanceLogo && (
                          <img
                            src={resonanceLogo.img}
                            alt={`${resonanceLogo.name} resonance logo`}
                            className="absolute bottom-1 right-1 w-12 h-12 pointer-events-none select-none drop-shadow-lg"
                            style={{ zIndex: 20 }}
                          />
                        )}
                      </div>
                      {/* Nama */}
                      <h3 className="text-lg font-semibold mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(255,215,0,0.4)]">
                        {char.name}
                      </h3>
                    </Link>

                    {/* Role */}
                    <p className="text-sm italic text-yellow-200/80 mb-3">
                      {char.role}
                    </p>

                    {/* Deskripsi */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {char.desc}
                    </p>
                  </div>
                </AnimatedContent>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default Hero;
