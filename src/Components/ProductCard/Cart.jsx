import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return <p className="text-center mt-10">🛒 Your cart is empty!</p>;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-base-200 p-4 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1670983858433-8ef0f54f0c71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p className="font-semibold text-neutral">
                  ${item.price * item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-semibold">Total: ${total}</h2>
        <button
          onClick={clearCart}
          className="mt-3 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
