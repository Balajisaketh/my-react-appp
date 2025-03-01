// import React from "react";
import supreme from "../assets/Supreme_logos (3).png"
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-4">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-blue-700 font-bold text-lg">
          <img src={supreme} className="w-30 h-10"/>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md">Contact Us</button>
          <div className="hidden md:block flex gap-2">
            <a href="#" className="text-gray-600">🔗 LinkedIn</a>
            <a href="#" className="text-gray-600">📄 Docs</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="text-center">
        <p className="text-gray-400 uppercase tracking-widest">Performance in motion</p>
        <h1 className="text-4xl font-bold mt-2">Soft Trims and NVH Solutions</h1>
        <p className="text-lg text-gray-300 mt-2">for seamless rides</p>
      </div>
    </div>
  );
};

export default HeroSection;