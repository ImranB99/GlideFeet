import React, { useContext } from "react";

import { IoClose } from "react-icons/io5";
import { CartContext } from "../../Context/Context";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartDrawer = ({ onClose }) => {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  // const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      {/* 🔹 Background overlay with blur */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 🔹 Drawer */}
      <div className="fixed top-0 right-0 w-80 h-full bg-base-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">🛒 Your Cart</h2>
          <button onClick={onClose}>
            <IoClose className="text-2xl hover:text-red-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-3 overflow-y-auto h-[70%]">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="flex w-full space-x-2 sm:space-x-4 bg-base- p-2 pr-20 border-b-2 border-gray-400">
                <img
                  className="flex-shrink-0 object-cover w-15 h-15 dark:border- rounded outline-none  dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className=" font-semibold leading-snug ">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">৳{item.price}</div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      type="button"
                      className="flex items-center px-1 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span className="text-">Remove</span>
                    </button>
                    {/* Count */}
                    <div className="flex items-center justify-between  border-gray-400 mx-2 border">
                      <div className="flex items-center gap-4 ">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="pl-3 py-1  text-lg"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold border-x px-3 border-gray-400">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="pr-3 py-1   text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty 🛍️
            </p>
          )}
        </div>

        {/* Footer */}
        <div className=" border-t space-y-2 px-2">
          <div className="mt-2 text-end">
            <h2 className="text-xl font-semibold">Total amount: ৳{totalPrice}</h2>
            <p>(Not including taxes and shipping costs)</p>
          </div>
          <div className=" flex flex-col gap-2 mt-13">
            <button className="w-full btn btn-neutral text-lg">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full btn btn-neutral btn-outline text-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
