import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { characters } from "../data";

function CharacterDetail() {
  const { id } = useParams();

  const character = characters.find((char) => String(char.id) === id);

  if (!character) {
    return (
      <div className="text-center text-white mt-20">
        <p>Character not found.</p>
        <Link to="/" className="text-yellow-400 underline">
          Back to home
        </Link>
      </div>
    );
  }

  const status = {
    HP: 5132,
    Attack: 768,
    Defense: 263,
    Speed: 100,
    CritRate: "5%",
    CritDamage: "50%",
  };

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
        {/* Bagian gambar + tabel status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Gambar karakter + Nama + Role */}
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Container gambar dengan nama karakter di atas */}
            <div className="relative">
              <motion.h1
                className="absolute top-4 left-1/2 mt-10 mr-20 -translate-x-1/2 
                           text-5xl  font-extrabold 
                           bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 
                           bg-clip-text text-transparent 
                           drop-shadow-[3px_3px_0px_rgba(0,0,0,0.9)] text-center py-70"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                {character.name}
              </motion.h1>
              <motion.img
                src={character.img || "/fallback.png"}
                alt={`Portrait of ${character.name}`}
                className="w-70 max-w-lg rounded-2xl border border-amber-300/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] object-cover"
              />
              {/* Nama karakter ditempelkan ke gambar */}
            </div>

            {/* Role di bawah gambar */}
            {character.role && (
              <motion.span
                className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-lg text-yellow-300 font-medium shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                Role: {character.role}
              </motion.span>
            )}
          </motion.div>

          {/* Tabel status */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 border border-yellow-500/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,215,0,0.1)] overflow-x-auto"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
              Status
            </h2>
            <table className="min-w-full border-collapse">
              <tbody>
                {Object.entries(status).map(([stat, value]) => (
                  <tr key={stat} className="border-b border-yellow-500/20">
                    <td className="py-2 pr-4 font-semibold text-yellow-300">
                      {stat}
                    </td>
                    <td className="py-2 text-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Story */}
        {character.desc && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gray-900/50 border border-yellow-500/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
              Story
            </h2>
            <p className="text-gray-300 leading-relaxed">{character.desc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
