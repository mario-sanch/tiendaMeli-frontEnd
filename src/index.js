import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/error-page/error-page";
import Landing from "./pages/landingPage/Landing";
import Products, {
  loader as productsLoader,
} from "./pages/product/product-list/product-list";
import CreateProduct, {
  action as createProductAction,
} from "./pages/product/create-product/create-product";
import ProductDetail, {
  loader as productLoader,
} from "./pages/product/product-detail/product-detail";
import ProductUpdate, {
  loader as productEditLoader,
  action as updateProductAction,
} from "./pages/product/product-edit/product-edit";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";
import NoMatch from "./pages/no-match/no-match";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
          {
            path: "create-product",
            element: <CreateProduct />,
            action: createProductAction,
          },
          {
            path: "products",
            element: <Products />,
            loader: productsLoader,
          },
          {
            path: "product/:id",
            element: <ProductDetail />,
            loader: productLoader,
          },
          {
            path: "product/:id/edit",
            element: <ProductUpdate />,
            loader: productEditLoader,
            action: updateProductAction,
          },
          {
            path: "shopping-cart",
            element: <ShoppingCart />,
          },
          {
            path: "*",
            element: <NoMatch />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
