/* import "./Menu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Menu = () => {
  return (
    <div className="hero">
      <nav className="nav container" id="nav">
        <h2 className="nav_logo">Tu logo</h2>
        <ul className="nav_links">
          <li className="nav_item">
            <a href="#" className="nav_link">
              Inicio
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Blog
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Acerca de
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Contacto
            </a>
          </li>
        </ul>
        <a href="#nav" className="nav_hamburger">
          <AiOutlineMenu size={70} className="nav_icon" />
        </a>
        <a href="#" className="nav_close">
          <ImCross className="nav_icon" />
        </a>
      </nav>
    </div>
  );
};

export default Menu;
 */
/*************************************************/

import "./Menu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Menu = () => {
  return (
    <div>
      <nav className="navbar" id="nav">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" aria-label="ir a la pagina de inicio">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              aria-label="conoce mas sobre nocotros"
            >
              Acerca
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              aria-label="explorar nuestros servicios"
            >
              Productos
              <ul className="submenu">
                <li>
                  <a href="#">Perfumes</a>
                </li>
                <li>
                  <a href="#">Ropa</a>
                </li>
                <li>
                  <a href="#">Accesorios</a>
                </li>
              </ul>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" aria-label="">
              Contactos
            </a>
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
