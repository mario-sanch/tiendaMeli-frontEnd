import "./header.css";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="/images/logox.jpeg" alt="app logo" />
      </div>

      <div className="menu-container">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
