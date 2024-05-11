//import logox from "./images/logox.jpeg";
import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Menu from "./component/menu/Menu";
import Footer from "./component/footer/footer";

function App() {
  const navigation = useNavigation();

  return (
    <div className="appContainer">
      <div
        className="header-container"
        style={{ borderBottom: "1px solid black" }}
      >
        <img src="./images/logox.jpeg" alt="logo" />
        <Menu />
      </div>
      <div
        id="mainContent"
        className={navigation.state == "loading" ? "loading" : ""}
        style={{ border: "1px solid purple" }}
      >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
