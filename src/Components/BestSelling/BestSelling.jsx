import React from "react";
import SANDALS from "../../assets/BestSelling/WB_SLIDE_MAX_GRAY_3.webp";
import Ten from "../../assets/BestSelling/close-up-dark-blue-footwear_23-2147630321.jpg";
import WOMEN from "../../assets/BestSelling/multirow-img-2 b.webp";
import Retro from "../../assets/BestSelling/Product-18-1 b.webp";
import { AiOutlineDash } from "react-icons/ai";
import { CgStyle } from "react-icons/cg";

const BestSelling = () => {
  const product = [
    { id: 1, name: "Retro Men's Lightning Shoes", image: Retro, price: 700 },
    { id: 2, name: "STYLISH MEN SLIDE SANDALS", image: SANDALS, price: 900 },
    { id: 3, name: "Ten Little", image: Ten, price: 1200 },
    {
      id: 4,
      name: "WOMEN'S SUMMER LEATHER SANDALS",
      image: WOMEN,
      price: 1600,
    },
  ];
  return (
    <div className="w-11/12 mx-auto mt-10 lg:mt-20">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-3 flex items-center gap-3">
            <CgStyle />
          BEST SELLING
        </h1>
        {/* <p><GoDash size={34} /></p> */}
        {/* <AiOutlineDash size={34} /> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-self-center">
        {product.map((p) => (
          <div>
            <img className="w-[183px] h-[183px] md:w-[432px] md:h-[432px] lg:w-[433px] lg:h-[433px]" src={p.image} alt="" />
            <h1 className="font-semibold md:text-md lg:text-2xl mt-2">{p.name}</h1>
            <p className="md:text-md lg:text-2xl">৳ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
