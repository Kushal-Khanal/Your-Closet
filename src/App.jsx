// src/App.js
//import React from 'react';
import Header from './Header';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';
import Footer from './Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="px-4">
        <div className="flex flex-col md:flex-row">
          <CategoryList />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard 
              title="Daura Suruwal" 
              price="Rs. 1000 (Hire)" 
              imageUrl="daura.png" 
            />
            <ProductCard 
              title="Dhaka Topi" 
              price="Rs. 500 (Hire)" 
              imageUrl="dhaka.jpg" 
            />
            <ProductCard 
              title="Banarasi Saree" 
              price="Rs. 2000 (Hire)" 
              imageUrl="saree.webp" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
