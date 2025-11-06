import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollHandling/ScrollToTop";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
