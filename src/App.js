import logo from "./logo.svg";
import "./App.css";
import Menu from "./component/menu/Menu";
//import { Route, Routes } from "react-router-dom";
//import Landing from "./pages/landingPage/Landing";
//import ShoppingCart from "./pages/shopping-cart/shopping-cart";
//import ErrorPage from "./pages/error-page/error-page";

function App() {
  return (
    <div className="appContainer">
      {/* <Menu />
      <Routes>
        <Route
          path="/"
          element={<Landing />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes> */}
      <Menu />
    </div>
  );
}

export default App;
