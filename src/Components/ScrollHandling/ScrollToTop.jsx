import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // ছোট হাতের 'w'
  }, [pathname]);

  return null;
};

export default ScrollToTop;
