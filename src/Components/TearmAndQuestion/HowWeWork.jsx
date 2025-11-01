import React from "react";
import { FaTruck, FaTags, FaLock } from "react-icons/fa";

const HowWeWork = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">HOW WE WORKS</h2>
      <p className="text-center text-GRAY-500 mb-10">
        At GlideFeet, we make shopping for your favorite beauty products easy and convenient. Here’s how it works
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold ">01.</h3>
          <h4 className="font-semibold mt-2">Browse & Order :</h4>
          <p className="text-sm text-gray-600 mt-1">
            Explore our wide range of cosmetics and beauty products. Add your desired items to the cart and place your order.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">02.</h3>
          <h4 className="font-semibold mt-2">Order Confirmation:</h4>
          <p className="text-sm text-gray-600 mt-1">
            Once you place an order, we will confirm it through a message on your preferred platform.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">03.</h3>
          <h4 className="font-semibold mt-2">Cash on Delivery:</h4>
          <p className="text-sm text-gray-600 mt-1">
            Enjoy the convenience of cash on delivery. Our courier partners will deliver your order to your doorstep.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">04.</h3>
          <h4 className="font-semibold mt-2">Fast & Reliable Delivery:</h4>
          <p className="text-sm text-gray-600 mt-1">
            Expect your products to arrive promptly and in perfect condition with our efficient delivery system.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
        <div className="flex flex-col items-center">
          <FaTruck className="text-3xl  mb-2" />
          <p className="font-semibold">Free Delivery on Order TK.3000</p>
          <p className="text-sm ">For All Products</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTags className="text-3xl  mb-2" />
          <p className="font-semibold">Up to 10% OFF on All Items</p>
          <p className="text-sm ">Available for <span className="italic font-medium">BELASEA</span> Users Group!</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLock className="text-3xl  mb-2" />
          <p className="font-semibold">100% Secure Payment</p>
          <p className="text-sm">We ensure secure payment!</p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
