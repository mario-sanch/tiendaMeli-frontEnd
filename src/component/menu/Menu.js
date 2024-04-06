import "./Menu.css";
import { SlArrowDown } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="nav container" id="nav">
      <h2 className="navLogo">Logo here</h2>
      <ul className="navLinks">
        <li className="navItem">
          <a href="#" className="navLink">
            Inicio
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Ropa
            <SlArrowDown className="dropdown-arrow" />
            <input type="checkbox" className="dropdown-check" />
          </a>
          <div className="dropdown-content">
            <ul className="dropdown-sub">
              <li className="dropdown-li">
                <Link className="dropdown-anchor">Ropa Depostiva</Link>
              </li>
              <li className="dropdown-li">
                <Link className="dropdown-anchor">Ropa casual</Link>
              </li>
              <li className="dropdown-li">
                <Link className="dropdown-anchor">Accesorios</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="navItem">
          <Link to="/shopping-cart" className="navLink">
            <FaShoppingCart />
            Carrito
          </Link>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Contacto
          </a>
        </li>
      </ul>
      <a href="#nav" className="navHamburger">
        <AiOutlineMenu size={70} className="navIcon" />
      </a>
      <a href="#" className="navClose">
        <IoIosCloseCircleOutline size={50} className="navIcon" />
      </a>
    </nav>
  );
}