// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { AiOutlineMenu } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";

// export default function Menu() {
//   return (
//     <nav className="nav container" id="nav">
//       <ul className="navLinks">
//         <li className="navItem">
//           <NavLink
//             to={`products`}
//             className={({ isActive, isPending }) =>
//               isActive ? "active" : isPending ? "pending" : ""
//             }
//           >
//             Inicio
//           </NavLink>
//         </li>
//         <li className="navItem">
//           <a href="#" className="navLink">
//             Ropa
//             <SlArrowDown className="dropdown-arrow" />
//             <input type="checkbox" className="dropdown-check" />
//           </a>
//           <div className="dropdown-content">
//             <ul className="dropdown-sub">
//               <li className="dropdown-li">
//                 <Link className="dropdown-anchor">Ropa Depostiva</Link>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="dropdown-anchor">Ropa casual</Link>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="dropdown-anchor">Accesorios</Link>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li className="navItem">
//           <NavLink
//             to={`/shopping-cart`}
//             className={({ isActive, isPending }) =>
//               isActive ? "active" : isPending ? "pending" : ""
//             }
//           >
//             <FaShoppingCart />
//             Carrito
//           </NavLink>
//         </li>
//         <li className="navItem">
//           <a href="#" className="navLink">
//             Contacto
//           </a>
//         </li>
//       </ul>
//       <a href="#nav" className="navHamburger">
//         <AiOutlineMenu size={70} className="navIcon" />
//       </a>
//       <a href="#" className="navClose">
//         <IoIosCloseCircleOutline size={50} className="navIcon" />
//       </a>
//     </nav>
//   );
// }
/*****************************************************************************/

import "./Menu.css";
import { SlArrowDown } from "react-icons/sl";

const Menu = () => {
  return (
    <nav id="navbar">
      <ul className="navbar-options">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span>
            Products <SlArrowDown className="dropdown-arrow" />
          </span>
          <ul>
            <li>
              <a href="#">Ropa</a>
            </li>
            <li>
              <a href="#">Perfumes</a>
            </li>
            <li>
              <a href="#">Accesorios</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
