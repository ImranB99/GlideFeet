import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductCard from "../Components/ProductCard/ProductCard";
import LeftAside from "../Components/ProductCard/LeftAside";
import { CgStyle } from "react-icons/cg";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [colorFilter, setColorFilter] = useState(""); // empty মানে no color filter
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { cat } = useParams();
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // ✅ Filtering logic
  // const filteredProducts =
  //   !cat || cat === "all"
  //     ? products
  //     : products.filter(
  //         (product) => product.Category.toLowerCase() === cat.toLowerCase()
  //       );

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      !cat || cat === "all"
        ? true
        : product.Category.toLowerCase() === cat.toLowerCase();

    const matchColor = !colorFilter
      ? true
      : product.Color.toLowerCase() === colorFilter.toLowerCase();

    return matchCategory && matchColor;
  });

  const categories = [
    { name: "All", path: "all" },
    { name: "Men", path: "men" },
    { name: "Women", path: "women" },
    { name: "Kids", path: "kids" },
    { name: "Sports", path: "Sports" },
    { name: "Loafer", path: "Loafer" },
    { name: "Formal", path: "Formal" },
  ];

  // === Aside ===
  <div className="flex flex-col gap-2 p-3">
    <h2 className="font-semibold mb-2">Filter by Color</h2>
    {["red", "blue", "black", "brown"].map((color) => (
      <button
        key={color}
        className={`px-4 py-2 rounded ${
          colorFilter === color
            ? "bg-blue-600 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => setColorFilter(color === colorFilter ? "" : color)}
      >
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
    ))}
  </div>;

  return (
    <div>
      <div className="mb-5 p-5 bg-base-300 text-center">
        <h1 className="text-2xl font-semibold lg:text-4xl flex items-center justify-center gap-3"><CgStyle /> Quick Look <CgStyle /></h1>
        <p className="text-lg lg:text-xl">Get a sneak peek at our styles without leaving the page.</p>
      </div>

      {/* Cards */}
      <section className="sm:grid grid-cols-12 justify-self-center gap-5 lg:gap-10">
        <aside className="col-span-3 hidden md:inline-block ">
          <LeftAside
            colorFilter={colorFilter}
            setColorFilter={setColorFilter}
          />
        </aside>
        <main className="col-span-9">
          {/* === Buttons === */}
          <div className="flex flex-wrap justify-center gap-3 md:mb-6">
            {categories.map((c) => (
              <button
                key={c.path}
                onClick={() => navigate(`/shop/${c.path}`)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  (!cat && c.cat === "all") || cat === c.path
                    ? "bg-neutral text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* === Filter For small Device === */}
          <div className="sm:hidden">
            <LeftAside
              colorFilter={colorFilter}
              setColorFilter={setColorFilter}
            />
          </div>

          {/* === Card === */}
          {filteredProducts.length > 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 justify-self-center  lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          ) : (
            "No User Found"
          )}
        </main>
      </section>
    </div>
  );
};

export default Shop;
