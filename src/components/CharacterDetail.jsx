import { useParams } from "react-router-dom";
import { characters } from "../data";

function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((c) => c.id.toString() === id);

  if (!character) {
    return (
      <p className="text-center text-red-500 mt-10">Character not found</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Nama */}
        <h1 className="text-4xl font-bold mb-4">{character.name}</h1>

        {/* Gambar */}
        <img
          src={character.img}
          alt={character.name}
          className="w-full max-w-lg rounded-lg shadow-lg mb-8"
        />

        {/* Info */}
        <p className="text-lg mb-4">
          <span className="font-bold">Role:</span> {character.role}
        </p>
        <p className="text-lg mb-4">
          <span className="font-bold">Weapon:</span> {character.weapon}
        </p>

        {/* Status */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Status</h2>
        <ul className="list-disc list-inside">
          {Object.entries(character.status).map(([stat, value]) => (
            <li key={stat}>
              <span className="font-bold">{stat}:</span> {value}
            </li>
          ))}
        </ul>

        {/* Story */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Story</h2>
        <p>{character.story}</p>
      </div>
    </div>
  );
}

export default CharacterDetail;
