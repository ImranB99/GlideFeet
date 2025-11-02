import React from "react";
import blog1 from "../../assets/Blog/blog-1.webp";
import blog2 from "../../assets/Blog/blog-2.webp";
import blog3 from "../../assets/Blog/blog-3.webp";
import { AiOutlineDash } from "react-icons/ai";
import { CgStyle } from "react-icons/cg";

const News = () => {
  const news = [
    {
      id: 1,
      name: "SNEAKER FASHION WEEKS",
      image: blog1,
      news: "Sneaker Fashion Weeks around the world are redefining style, blending comfort with luxury. Designers are showcasing sneakers as statement pieces rather than just casual wear. From futuristic designs to eco-friendly materials, this seasons runway proves that sneakers have officially stepped into the high-fashion spotlight.",
    },
    {
      id: 2,
      name: "WOMEN'S SNEAKER FASHION",
      image: blog2,
      news: "Women's sneaker fashion is evolving fast — from sporty silhouettes to chic, minimalist designs. Influencers and models are pairing sneakers with dresses, blazers, and even evening wear. This shift shows how sneakers have become a symbol of empowerment, comfort, and individuality in modern women's style.",
    },
    {
      id: 3,
      name: "RUNWAY MEETS STREET",
      image: blog3,
      news: "The line between streetwear and high fashion continues to blur as sneakers dominate both worlds. Luxury brands are collaborating with street labels to create limited-edition releases that capture urban culture. This fusion of runway and street style celebrates creativity, diversity, and everyday elegance.",
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-3 flex items-center gap-3">
          <CgStyle /> LATEST NEWS
        </h1>
        {/* <p><GoDash size={34} /></p> */}
        {/* <AiOutlineDash size={34} /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map((n) => (
          <div className="bg-base-200 shadow-md">
            <img src={n.image} alt="" />
            <div className="p-4">
              <h1 className="hover:underline text-xl lg:text-2xl font-semibold mb-1 mt-2">
                {n.name}
              </h1>
              <p>{n.news}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
