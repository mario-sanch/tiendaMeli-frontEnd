import logo from "./logo.svg";
import "./App.css";
import Menu from "./component/menu/Menu";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";

function App() {
  return (
    <div className="appContainer">
      <Menu />
      <Routes>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
