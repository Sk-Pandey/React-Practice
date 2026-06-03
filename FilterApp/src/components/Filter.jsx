import React, { useState } from "react";

const Filter = () => {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    },
    {
      id: 2,
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    },
    {
      id: 3,
      name: "Mango",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
    },
    {
      id: 4,
      name: "Orange",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
    },
    {
      id: 5,
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg",
    },
    {
      id: 6,
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Fruit Gallery 🍎
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Search and explore delicious fruits
          </p>

          <div className="mt-5">
            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
              {filteredFruits.length} Fruits Found
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
            <label className="flex items-center gap-3 px-5 py-4">
              <svg
                className="w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>

              <input
                type="search"
                placeholder="Search fruits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
              />
            </label>
          </div>
        </div>

        {/* Fruit Cards */}
        {filteredFruits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFruits.map((fruit) => (
              <div
                key={fruit.id}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] hover:-translate-y-3 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <figure className="h-72 overflow-hidden">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </figure>

                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {fruit.name}
                  </h2>

                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:scale-105 transition">
                    View Fruit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="text-8xl mb-4">😢</div>

            <h2 className="text-4xl font-bold text-white mb-3">
              No Fruit Found
            </h2>

            <p className="text-gray-400 text-lg">
              Try searching for another fruit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
