import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";

import banner1 from "../../assets/Carousel/main-banner-10.webp";
import banner2 from "../../assets/Carousel/main-banner-4.webp";
import banner3 from "../../assets/Carousel/main-banner-8.webp";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="hidden sm:inline-block">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full relative">
            <img src={banner1} className="w-full" />
            <div className=" absolute top-9 left-2 md:top-40   md:left-10 lg:top-96 lg:left-16 md:space-y-3 md:text-white text-gray-700">
              <h1 className=" md:text-3xl lg:text-6xl font-bold">
                STEP INTO COMFORT & STYLE
              </h1>
              <p className="text-sm lg:text-4xl hidden sm:inline-block">
                Discover premium shoes designed for <br /> every step you take —{" "}
                <br />{" "}
                <span className="hidden sm:inline-block">
                  from morning jogs to evening walks, comfort meets fashion.
                </span>
              </p>{" "}
              <br />
              <Link to="/shop" className="btn md:mt-3 btn-neutral">Shop Now</Link>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <img src={banner2} className="w-full" />

            {/* Banner 2 */}
            <div className=" absolute top-16   left-2 md:top-40 lg:w-[600px]   md:left-9 lg:top-80 lg:left-14 md:space-y-3 md:text-white text-gray-700">
              <h1 className=" md:text-4xl lg:text-6xl font-bold">
                NEW ARRIVALS <span> </span> FOR TRENDSETTERS
              </h1>
              <p className="text-sm lg:text-4xl md:text-xl hidden sm:inline-block font-semibold text-green-">
                Upgrade your wardrobe with our latest sneaker collection. <br />{" "}
                Fresh designs, bold colors, and unbeatable comfort await you.
              </p>
              <br />
              <Link  to="/shop" className="btn md:mt-3 btn-neutral">Shop Now</Link>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full relative ">
            <img src={banner3} className="w-full" />

            {/* banner-3 */}
            <div className=" absolute top-16   left-15 md:top-40 lg:w-[600px]   md:left-56 lg:top-48 lg:left-[1000px] md:space-y-3 md:text-white text-gray-00">
              <h1 className=" md:text-4xl lg:text-6xl font-bold">
                NEW ARRIVALS FOR TRENDSETTERS
              </h1>
              <p className="text-sm lg:text-4xl md:text-xl hidden sm:inline-block font-semibold">
                Upgrade your wardrobe with our latest sneaker collection. <br />{" "}
                Fresh designs, bold colors, and unbeatable comfort await you.
              </p>
              <br />
              <Link  to="/shop" className="btn md:mt-3 btn-neutral">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
