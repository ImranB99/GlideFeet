import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (query) {
          const filtered = data.filter((item) =>
            item.Name.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filtered);
        } else {
          setProducts([]);
        }
      });
  }, [query]);

  return (
    <div>
      <h2 className="text-lx">Search Result for "{query}"</h2>
      {products.length > 0 ? (
        <div className=" grid grid-cols-6 justify-self-center gap-5 mt-2">
          {products.map((product) => (
            <Link to={`/details/${product.id}`}>
              <img
                className="w-[183px] h-[183px] md:w-[287px] md:h-[287px] lg:w-[260px] lg:h-[260px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb2g5JzD8rKBw6653ojWMmWldi547sPYwjw&s"
                alt=""
              />
              <h2>{product.Name}</h2>
              <div className="flex gap-5">
                <del>৳ {product.OfficialPrice}</del>
                <p className="text-2xl">৳ {product.DiscountPrice}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        "No Result Found"
      )}
    </div>
  );
};

export default SearchResult;
