import "./header.css";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="menu-container">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
