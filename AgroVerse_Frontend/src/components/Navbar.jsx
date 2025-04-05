import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">AgroVerse</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/KrishiMitra">KrishiMitra</Link>
        <Link to="/AgroMart">AgroMart</Link>
        <Link to="/AgroRent">AgroRent</Link>
        <Link to="/GrowPal">GrowPal</Link>
        <Link to="/AgriKart">AgriKart</Link>
        <Link to="/SoilSense">SoilSense</Link>
        <Link to="/FarmWatch">FarmWatch</Link>
        <Link to="/GreenSchool">GreenSchool</Link>
      </div>
    </nav>
  );
};

export default Navbar;
