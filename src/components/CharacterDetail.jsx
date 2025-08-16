import { useParams, Link } from "react-router-dom";
import { characters } from "../data";
import { motion as _motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((c) => c.id.toString() === id);

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-red-500">
        <p className="text-xl font-semibold">Character not found</p>
      </div>
    );
  }

  // Animasi konsisten
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Efek background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 md:px-16 py-10 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mb-9 border border-amber-200/50 hover:border-amber-300 py-2 px-5 rounded-md"
        >
          <FiArrowLeft className="text-xl" />
          <span className="font-medium">Back</span>
        </Link>

        {/* Nama */}
        <motion.h1
          className="text-4xl md:text-5xl ml-15 font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          {character.name}
        </motion.h1>

        {/* Gambar */}
        <motion.img
          src={character.img || "/fallback.png"}
          alt={`Portrait of ${character.name}`}
          className="w-70 max-w-lg rounded-2xl border border-amber-300/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] mb-8 object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* Info badges */}
        <div className="flex flex-wrap gap-4 mb-8">
          {character.role && (
            <motion.span
              className="px-3 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-lg text-yellow-300 font-medium shadow-sm ml-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Role: {character.role}
            </motion.span>
          )}
          {character.weapon && (
            <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-lg text-yellow-300 font-medium shadow-sm">
              Weapon: {character.weapon}
            </span>
          )}
        </div>

        {/* Status */}
        {character.status && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mt-6 mb-4">Status</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(character.status).map(([stat, value]) => (
                <div
                  key={stat}
                  className="bg-gray-900/60 rounded-xl p-4 border border-yellow-500/30 hover:border-yellow-400 transition-all shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                >
                  <p className="text-yellow-300 font-semibold">{stat}</p>
                  <p className="text-lg">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Story */}
        {character.story && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 bg-gray-900/50 border border-yellow-500/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
              Story
            </h2>
            <p className="text-gray-300 leading-relaxed">{character.story}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
