import React, { useContext, useState } from "react";
import {
  MdCardMembership,
  MdLanguage,
  MdOutlineDarkMode,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link, NavLink } from "react-router";
import SearchBar from "../SearchSection/SearchBar";
import ThemeToggle from "../ThemeTogol";
import { CartContext } from "../../Context/Context";
import CartDrawer from "../ProductCard/CartDrawer";
import { AuthContext } from "../../Context/AuthContext";
import { LuLogIn, LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  const { user, LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut()
      .then(() => {
        alert("LogOut successfully");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // console.log(error);
        alert(error);
      });
    // console.log("logout");
  };
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
            <div className="">
              <SearchBar />
            </div>

            <button className="relative" onClick={() => setIsCartOpen(true)}>
              <MdOutlineShoppingCart size={34} />

              {/* ✅ Cart count badge */}
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* User Profile */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w- rounded-full">
                  {user && user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  ) : user ? (
                    <div className="w-10 h-10 rounded-full  flex items-center justify-center bg-gray-300">
                      <span className="text-gray-600 font-bold text-2xl mb-1">
                        {user.email?.[0]?.toUpperCase() || "?"}
                      </span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Guest"
                      />
                    </div>
                  )}
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
              >
                {/* Profile Details */}
                <div className="max-w-md flex space-x-2">
                  <div className="flex-shrink-0 h-10 w-10 sm:mb-0">
                    {user && user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border border-gray-300"
                      />
                    ) : user ? (
                      <div className="w-10 h-10 rounded-full  flex items-center justify-center bg-gray-300">
                        <span className="text-gray-600 font-bold text-2xl mb-1">
                          {user.email?.[0]?.toUpperCase() || "?"}
                        </span>
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Guest"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div>
                      <h2 className="text-md font-semibold">
                        {user?.displayName}
                      </h2>
                    </div>
                    <div className="space-y-1">
                      {user ? (
                        <span className="flex items-center space-x-1">       
                          <span className="text-sm text-gray-500 break-words whitespace-normal w-38">{user?.email}</span>
                        </span>
                      ) : (
                        <span className="font-semibold text-md ">
                          You’re not logged in
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border border-gray-500"></div>

                {/* xxx */}
                <div className="space-y-3 mt-5">
                  <div className="flex items-center gap-2 text-lg ml-3">
                    <MdLanguage />
                    Language
                  </div>
                  <div className="flex items-center gap-2 text-lg ml-3">
                    <MdCardMembership />
                    Membership
                  </div>
                  <div className="flex items-center gap-2 text-lg ml-3">
                    <MdOutlineDarkMode />
                    Dark Mode:
                    <div className="btn btn-xs  btn-neutral">
                      <ThemeToggle />
                    </div>
                  </div>

                  {user ? (
                    <div
                      onClick={handleLogout}
                      className="text-lg ml-3 btn btn-ghost btn-neutral p-1"
                    >
                      <LuLogOut />
                      Logout
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="text-lg ml-3 btn btn-ghost btn-neutral p-1"
                    >
                      <LuLogIn />
                      Login
                    </Link>
                  )}
                </div>
                <li className="bg-base-300"></li>
                {/* <button onClick={handleLogout} className="btn btn-neutral btn-outlin btn-sm text-lg">
                  Logout
                </button> */}
                <div className="border border-gray-500 "></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Navbar;
