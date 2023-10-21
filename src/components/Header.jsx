import "../App.css";
import "./Header.css";
import Logo from "../assets/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__top">
          <div className="header__searchbar">
            <span>
              <GrSearch />
            </span>
            <input type="text" placeholder="Buscar" />
          </div>

          <div className="header__logo">
            <figure>
              <a href="/">
                <img src={Logo} alt="Logo" className="header__logo-image" />
              </a>
            </figure>
          </div>

          <div className="header__buttons">
            <div className="header__account">
              <button className="button-m">
                <span>
                  <FaUser />
                </span>
                Cuenta
              </button>
            </div>

            <div className="header__shopping-cart">
              <button className="button-m">
                <span>
                  <FaShoppingBag />
                </span>
                Cesta
              </button>
            </div>
          </div>
        </div>

        <div className="header__bottom">
          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/acerca">Acerca de</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
