import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import About from "../Page/About";
import Shop from "../Page/Shop";
import Blog from "../Page/Blog";
import ProductDetails from "../Components/ProductCard/ProductDetails";
import SearchResult from "../Components/SearchSection/SearchResult";
import Cart from "../Components/ProductCard/Cart";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/shop/:cat",
        Component: Shop,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/product.json"),
        Component: ProductDetails,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/search",
        Component: SearchResult,
      },{
        path:"/cart",
        Component:Cart
      }
    ],
  },
]);
