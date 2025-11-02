import React from "react";
import Advertisement from "../Components/BlogSection/Advertisement";
import Discount from "../Components/BlogSection/Discount";
import News from "../Components/BlogSection/News";

const Blog = () => {
  return (
    <div className="-mt-10">
      <Discount />
      <Advertisement />
      <News />
    </div>
  );
};

export default Blog;
