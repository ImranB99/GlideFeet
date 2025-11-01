import React from "react";
import banner from "../../assets/Carousel/image-banner-1.webp";
import banner2 from '../../assets/Blog/WhatsApp Image 2025-11-01 at 12.57.13_45ea82cd.jpg';
import { CiDiscount1 } from "react-icons/ci";
import { Link } from "react-router";

const Discount = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="relative hidden sm:inline">
        <img src={banner} alt="" />
        <div className="text-center absolute top-0 md:top-18 md:left-64 lg:top-48 lg:left-[550px] text-black">
          <h3 className="text-lg lg:text-3xl mb-3 font-semibold">
            STEP INTO STYLE WITH MASSIVE DISCOUNTS
          </h3>
          <p className="text-gray-600 lg:text-xl">
            Trendy sneakers, comfy loafers, and sporty kicks — <br /> now at
            prices you can't resist. Hurry, limited time only!
          </p>
          <button className="btn btn-neutral mt-4">Shop Now</button>
        </div>
      </div>

      {/* === Small Device === */}
      <div className="relative sm:hidden">
       <img src={banner2} alt="" />
       <p className="font-semibold absolute top-2 text-center  w-full text-2xl mt-8 text-gray-600"> STEP INTO STYLE WITH <br /> MASSIVE DISCOUNTS!!</p>
       <Link to="/shop" className="btn btn-neutral mt-4 absolute bottom-5 left-36">Shop Now</Link>
       <p className="text-4xl absolute bottom-40 left-5 flex flex-col items-center gap-3 text-gray-600">25% OFF <CiDiscount1 size={44} /></p>
      </div>
    </div>
  );
};

export default Discount;
