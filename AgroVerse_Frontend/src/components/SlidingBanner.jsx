import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlidingBanner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-4 shadow-lg rounded-xl overflow-hidden">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        emulateTouch
        dynamicHeight={false}
      >
        <Link to="/KrishiMitra">
          <div>
            <img src="/banner/webbanner1.png" alt="Smart Farming" />
            <p className="legend">Smart Farming for the Future 🌾</p>
          </div>
        </Link>

        <Link to="/AgroMart">
          <div>
            <img src="/banner/webbanner2.png" alt="Agro Equipment" />
            <p className="legend">Shop Agri Tools & Inputs 🛒</p>
          </div>
        </Link>

        <Link to="/GrowPal">
          <div>
            <img src="/banner/banner3.png" alt="Urban Gardening" />
            <p className="legend">Start Your Garden at Home 🌱</p>
          </div>
        </Link>

        <Link to="/AgroRent">
          <div>
            <img src="/banner/banner3.png" alt="Equipment Rental" />
            <p className="legend">Rent Agricultural Equipment 🛠️</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default SlidingBanner;
