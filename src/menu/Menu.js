import "./Menu.css";
import { SlArrowDown } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

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
            Categoria 1
            <SlArrowDown className="dropdown-arrow" />
            <input type="checkbox" className="dropdown-check" />
          </a>
          <div className="dropdown-content">
            <ul className="dropdown-sub">
              <li className="dropdown-li">
                <a className="dropdown-anchor">sub categoria 1</a>
              </li>
              <li className="dropdown-li">
                <a className="dropdown-anchor">sub categoria 2</a>
              </li>
              <li className="dropdown-li">
                <a className="dropdown-anchor">sub categoria 3</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Acerca de
          </a>
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
