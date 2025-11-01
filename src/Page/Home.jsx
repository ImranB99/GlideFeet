import React from "react";
import Hero from "../Components/Header/Hero";
import HeroSection from "../Components/Header/HeroSection";
import Category from "../Components/CategorySection/Category";
import BestSelling from "../Components/BestSelling/BestSelling";
import HowWeWork from "../Components/TearmAndQuestion/HowWeWork";
import News from "../Components/BlogSection/News";
import Discount from "../Components/BlogSection/Discount";
import Advertisement from "../Components/BlogSection/Advertisement";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSection />
      <Category />
      <BestSelling />
      <Discount />
      <Advertisement />
      <News />
      <HowWeWork />
    </div>
  );
};

export default Home;
