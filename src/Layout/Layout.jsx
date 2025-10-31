import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
