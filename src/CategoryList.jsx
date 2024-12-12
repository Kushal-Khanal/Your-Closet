// src/components/CategoryList.js
//import React from 'react';

function CategoryList() {
  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-200">
      <h2 className="font-bold text-lg mb-4">Categories:</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-black">- Daura Suruwal</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Dhoti/Lungi</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Serwani</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Dhaka Topi</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Saree</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Lehenga</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Kurta Suruwal</a></li>
        <li className="mb-2"><a href="#" className="text-black">- Gunyou Choli</a></li>
      </ul>
    </aside>
  );
}

export default CategoryList;
