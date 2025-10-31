import React from "react";
import hero1 from "../../assets/HeroImage/WhatsApp Image 2025-11-01 at 00.30.37_75634b0a.jpg";
import hero2 from "../../assets/HeroImage/WhatsApp Image 2025-11-01 at 00.59.37_5b76bd1e.jpg";
import hero3 from "../../assets/HeroImage/WhatsApp Image 2025-11-01 at 00.30.38_e07f2464.jpg";
import { Link } from "react-router";
const HeroSection = () => {
  return (
    <div className="sm:hidden relative">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <img src={hero1} className="rounded-box w-[300px] h-[400]" />
        </div>
        <div className="carousel-item">
          <img src={hero2} className="rounded-box w-[300px] h-[400]" />
        </div>
        <div className="carousel-item">
          <img src={hero3} className="rounded-box w-[300px] h-[400]" />
        </div>
        
      </div>

      <Link  to="/shop" className="btn md:mt-3 btn-neutral absolute bottom-7 left-30">Shop Now</Link>
    </div>
  );
};

export default HeroSection;
