import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";

import Header from "./component/header/header";
import Footer from "./component/footer/footer";

const App = () => {
  return (
    <div className="appContainer">
      <header className="main-header">
        <Header />
      </header>
      <main className="main-content">
        main content
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
export default App;
