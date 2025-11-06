import React, { useContext, useEffect, useState } from "react";
import { MdOutlinePreview } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import BestSelling from "./../BestSelling/BestSelling";
import { CartContext } from "../../Context/Context";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findProduct = data.find((product) => product.id == id);
    setProduct(findProduct);
  }, [data, id]);

  const { Name,Image, DiscountPrice, OfficialPrice, Review, Color } = product;

  const increaseCount = () => {
    if (count < 10) setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.Name,
      price: product.DiscountPrice,
      image: product.Image,
      quantity: count,
    });
  };
  return (
    <div className="w-11/12 mx-auto my-5">
      {/* Card */}
      <div className="card md:card-side bg-base-100 shadow-md lg:w-[1500px] md:w-[900px] w-[367px] mx-auto ">
        <figure className="lg:w-[520px] lg:h-[520px] md:w-[440px] md:h-[440px] w-[367px]">
          <img
            className="h-fit"
            src={Image}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:w-[700px] md:w-[440px] h-[420px] space-y-2 lg:sp-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
            {Name}
          </h2>
          <div className="flex gap-2">
            <div className="text-2xl lg:text-3xl font-semibold">
              ৳ {DiscountPrice}
            </div>
            <del>৳ {OfficialPrice}</del>
          </div>
          <div className="flex items-center gap-2 md:text-lg lg:text-2xl">
            <MdOutlinePreview size={24} /> {Review} People are Reviewing this
            right now
          </div>
          <div className="md:text-lg lg:text-2xl ">Color: {Color}</div>
          {/* Size */}
          <div className="flex flex-col gap-1 ">
            <h1 className="md:text-lg lg:text-2xl">Size:</h1>
            <div className="join gap-2">
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="8"
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="9"
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="10"
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="11"
              />
            </div>
          </div>

          {/* Count */}
          <div className="flex items-center justify-between border-y py-2 border-gray-400 my-2 lg:my-5">
            <div className=" text-2xl">Quantity</div>
            <div className="flex items-center gap-4 border w-30 border-gray-300 rounded-lg">
              <button onClick={decreaseCount} className="px-3 py-1  text-2xl">
                -
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button onClick={increaseCount} className="px-3 py-1   text-lg">
                +
              </button>
            </div>
          </div>

          {/* Button */}
          <div className="flex gap-5 ">
            <button onClick={handleAdd} className="btn btn-outline">ADD TO CART</button>
            <button className="btn btn-neutral ">BUY NOW</button>
          </div>
        </div>
      </div>
      <div>
        <BestSelling />
      </div>
    </div>
  );
};

export default ProductDetails;
