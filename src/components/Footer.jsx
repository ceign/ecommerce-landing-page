import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo-footer.svg";
import cards from "../assets/cards.png";
const Footer = () => {

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="Footer Logo" />
            <p>
              Diseños que combinan elegancia atemporal con tendencias modernas, creados para quienes buscan destacar con estilo único.
            </p>
            <div className="footer__socials">
              <a href="#" onClick={(e) => e.preventDefault()}><FaFacebookF /></a>
              <a href="#" onClick={(e) => e.preventDefault()}><FaTwitter /></a>
              <a href="#" onClick={(e) => e.preventDefault()}><FaLinkedinIn /></a>
              <a href="#" onClick={(e) => e.preventDefault()}><FaInstagram /></a>
            </div>
          </div>

          <div className="footer__links">
            <div>
              <h3>Catálogo</h3>
              <ul>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Collares</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Sudaderas</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Joyeros</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Camisetas</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Chaquetas</a></li>
              </ul>
            </div>
            <div>
              <h3>Sobre nosotros</h3>
              <ul>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Nuestros Productores</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Mapa del Sitio</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Preguntas Frecuentes</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Quiénes Somos</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Términos y Condiciones</a></li>
              </ul>
            </div>
            <div>
              <h3>Atención al cliente</h3>
              <ul>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Contáctanos</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Rastrea tu Pedido</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Cuidado y Reparación</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Reservar una Cita</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Envíos y Devoluciones</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div>
          <p>© 2023 Coral, Inc.</p>
          <div className="footer__payments">
            <img src={cards} alt="Visa" />
          </div>
          <a href="#top" className="footer__scroll" onClick={handleScrollTop}><span>Subir</span><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
