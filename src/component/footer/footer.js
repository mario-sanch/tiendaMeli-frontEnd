import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      {/* 
       Aqui va -> derechos d autor, enlace a politica d privacidad,
       mapa del sitio, logotipo, informacion de contacto, iconos de redes sociales,
       formulario de registro por correo electronico
    */}
      <div className="contact-container">
        <FaFacebook />
        <span>
          <MdEmail /> Melissa@gmail.com
        </span>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2024</p>
      </div>
      <div className="politica">
        <span>Politica de privacidad - </span>
        <span> Seguridad</span>
      </div>
    </div>
  );
};

export default Footer;
