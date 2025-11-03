import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../../Context/Context";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <FaTimes className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b pb-2"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1670983858433-8ef0f54f0c71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ${item.discountPrice || item.price}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <MdDeleteForever color="red" size={24} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty 🛒
            </p>
          )}

<div className="border mt-20"></div>
          <div className="mt-6 text-right">
            <h2 className="text-xl font-semibold">Total: ${total}</h2>
            <p>Taxes, discounts and shipping calculated at checkout.</p>
            <button
              onClick={clearCart}
              className="btn btn-neutral w-full mt-2"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
