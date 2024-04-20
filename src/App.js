import logo from "./logo.svg";
import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Menu from "./component/menu/Menu";

function App() {
  const navigation = useNavigation();

  return (
    <div className="appContainer">
      <div>
        <Menu />
      </div>
      <div
        id="mainContent"
        className={navigation.state == "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
