// src/pages/MenuCategory.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import menuData from '../data/MenuData';

export default function MenuCategory() {
  const { category } = useParams();

  const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const filteredDishes = menuData.filter(
    (dish) => dish.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">{formattedCategory} Menu</h1>

      {filteredDishes.length === 0 ? (
        <p className="text-center text-gray-500">No dishes found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="p-4 border rounded shadow hover:shadow-lg transition">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{dish.name}</h2>
              <p className="mt-2 text-gray-600">{dish.description}</p>
              <p className="mt-1 font-semibold text-[#CCAA35]">sh {dish.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
