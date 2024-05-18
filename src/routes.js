import React from "react";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import Landing from "./pages/landingPage/Landing";
import ErrorPage from "./pages/error-page/error-page";
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
        index: true,
        element: <Landing />,
        loader: productsLoader,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
        action: createProductAction,
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
]);

export default router;
