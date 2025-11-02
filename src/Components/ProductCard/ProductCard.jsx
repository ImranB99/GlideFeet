import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
    
  const { id, Name, DiscountPrice, OfficialPrice } = product;
  return (
    <Link to={`/details/${id}`}>
      <img
        className="w-[183px] h-[183px] md:w-[287px] md:h-[287px] lg:w-[260px] lg:h-[260px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb2g5JzD8rKBw6653ojWMmWldi547sPYwjw&s"
        alt=""
      />
      <h2>{Name}</h2>
      <div className="flex gap-5">
        <del>৳ {OfficialPrice}</del>
        <p className="text-2xl">৳ {DiscountPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
