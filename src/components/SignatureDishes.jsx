import React, { useState } from "react";
import dishesData from "../data/dishes";

const categories = ["All", "Veg", "Non-Veg", "Chef Specials"];

export default function SignatureDishes() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredDishes =
    filter === "All"
      ? dishesData
      : dishesData.filter((d) => d.category === filter);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      className="py-10 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
      id="signature"
    >
      <h2 className="text-4xl font-curly text-center text-gold mb-8">
        Our Signature Dishes
      </h2>

      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              filter === cat
                ? "bg-gold text-white border-gold"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gold hover:text-white"
            }`}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(3);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.slice(0, visibleCount).map((dish) => (
          <div
            key={dish.id}
            className="relative overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white dark:bg-gray-800"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dish.name}</h3>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 text-white p-4 flex flex-col justify-center transition">
              <p className="text-sm mb-2">{dish.description}</p>
              <p className="font-bold">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredDishes.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-gold text-white px-6 py-2 rounded-full hover:brightness-110 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
