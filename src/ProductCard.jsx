// src/components/ProductCard.js
//import React from 'react';

function ProductCard({ title, price, imageUrl }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy</button>
    </div>
  );
}

export default ProductCard;
