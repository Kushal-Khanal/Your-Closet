// src/components/Header.js
//import React from 'react';

function Header() {
  return (
    <header className="bg-teal-400 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-orange-600 flex">
      <img
                src="fav.webp"
                alt="C++"
                className="w-8 h-8 rounded-full"
              /> Your Closet</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Categories</a></li>
          <li><a href="#" className="text-white">Services</a></li>
          <li><a href="#" className="text-white">Sale</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
