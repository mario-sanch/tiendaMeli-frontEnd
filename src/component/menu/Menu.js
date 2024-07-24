import "./Menu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="navbar" id="nav">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to={``} aria-label="ir a la pagina de inicio">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={``}
              className="nav-link"
              aria-label="conoce mas sobre nocotros"
            >
              Acerca
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`products`}
              className="nav-link"
              aria-label="explorar nuestros servicios"
            >
              Productos
              <ul className="submenu">
                <li>
                  <Link to={`products`}>Perfumes</Link>
                </li>
                <li>
                  <Link to={`products`}>Ropa</Link>
                </li>
                <li>
                  <Link to={`products`}>Accesorios</Link>
                </li>
              </ul>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={``} className="nav-link" aria-label="">
              Contactos
            </Link>
          </li>
        </ul>
        <a href="#nav" className="nav_hamburger">
          <AiOutlineMenu size={35} className="nav_icon" />
        </a>
        <a href="#" className="nav_close">
          <ImCross size={30} className="nav_icon" />
        </a>
      </nav>
    </div>
  );
};

export default Menu;
