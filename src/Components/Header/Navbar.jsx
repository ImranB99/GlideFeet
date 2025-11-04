import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";
import SearchBar from "../SearchSection/SearchBar";
import ThemeToggle from "../ThemeTogol";
import { CartContext } from "../../Context/Context";
import CartDrawer from "../ProductCard/CartDrawer";

const Navbar = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
    const { totalQuantity } = useContext(CartContext);

  const link = (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/shop">SHOP</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/blog">BLOG</NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm sticky z-50 top-0">
      <div className="navbar p-0">
        <div className="navbar-start pl-5">
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 my-3 w-24 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="lg:text-4xl  md:text-3xl text-2xl font-light">
            GLIDE<span className="font-semibold">FEET</span>
          </div>
        </div>

        {/* === END === */}
        <div className="navbar-end pr-5">
          <div className="flex gap-2 items-center">
            <div className="navbar-center sm:flex gap-5 text-2xl mr-10 hidden">
              {link}
            </div>
            <SearchBar />

            <button className="relative" onClick={() => setIsCartOpen(true)}>
              <MdOutlineShoppingCart size={34} />

              {/* ✅ Cart count badge */}
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
              >
                <li className="bg-base-300">
                  <a className="justify-between font-semibold">
                    Profile
                    <span className="badge badge-neutral">New</span>
                  </a>
                </li>
                <li className="bg-base-300">
                  <ThemeToggle />
                </li>
                <button className="btn btn-neutral">Logout</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <CartDrawer onClose={() => setIsCartOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;
