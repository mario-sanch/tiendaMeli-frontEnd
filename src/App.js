import logo from "./logo.svg";
import "./App.css";
import Menu from "./menu/Menu";

import Landing from "./landing/Landing";

function App() {
  return (
    <div className="appContainer">
      <Landing />
      <Menu />
    </div>
  );
}

export default App;
