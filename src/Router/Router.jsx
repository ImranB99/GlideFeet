import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import About from "../Page/About";
import Shop from "../Page/Shop";

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
    ],
  },
]);
