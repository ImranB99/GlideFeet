import React from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineDash } from "react-icons/ai";
import { CgStyle } from "react-icons/cg";
import { GoDash } from "react-icons/go";
import { useNavigate } from "react-router";

const Category = () => {
  const navigate = useNavigate()
  const categories = [
    {
      id: 1,
      name: "MEN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0tpzaXpiOWRTwr8DX5vCwMZlTC9WEUnlzw&s",
    },
    {
      id: 2,
      name: "WOMEN",
      image:
        "https://i.pinimg.com/236x/c6/02/94/c60294944b2edc3d78f3191b99fa3792.jpg",
    },
    {
      id: 3,
      name: "KIDS",
      image:
        "https://angiesbabyshop.com/cdn/shop/files/457220464_526786373225557_7612618144393919514_n.jpg?v=1724954928&width=1080",
    },
    {
      id: 4,
      name: "SPORTS",
      image:
        "https://down-sg.img.susercontent.com/file/8993dd9581eb78263fa441d0f4587383_tn.webp",
    },
    {
      id: 5,
      name: "LOAFER",
      image:
        "https://baccabucci.com/cdn/shop/products/05-IMG_0927_2.jpg?v=1662914647&width=1800",
    },
  ];
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-3 flex gap-3">
         <CgStyle /> SHOP BY CATEGORY 
        </h1>
        {/* <p><GoDash size={34} /></p> */}
        {/* <AiOutlineDash size={34} /> */}
      </div>
      <div className="lg:w-9/12 mx-auto md:w-11/12">
        <Marquee>
          <div className="flex justify-center ">
            {categories.map((category) => (
              <div onClick={()=> navigate(`/shop/${category.name.toLowerCase()}`)} className="flex flex-col items-center gap-1 lg:mx-15 md:mx-10 mx-2">
                <img
                  className="w-24 lg:w-44 lg:h-44  h-24 rounded-full"
                  src={category.image}
                  alt=""
                />
                <h1>{category.name}</h1>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Category;
