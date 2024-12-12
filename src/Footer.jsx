// src/components/Footer.js
//import React from 'react';

function Footer() {
  return (
    <footer className="bg-teal-400 p-4 mt-8">
      <div className="text-center">
        <p>&copy; Your Closet Ltd. 2024 - All rights reserved</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2">Consumer Experience</a> | 
          <a href="#" className="text-white mx-2">Terms and Conditions</a> | 
          <a href="#" className="text-white mx-2">Privacy Policy</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-white">Instagram</a>
          <a href="#" className="text-white">Facebook</a>
          <a href="#" className="text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
