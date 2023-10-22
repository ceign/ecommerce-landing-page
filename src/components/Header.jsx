import { useState, useEffect } from "react";
import "../App.css";
import "./Header.css";
import Logo from "../assets/logo.svg";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

const Header = () => {

  // Hide navigation on mobile
  const [showNavigation, setShowNavigation] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => setShowNavigation(window.innerWidth > 992);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

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
              <a href="#">
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

        {showNavigation && (
          <div className="header__navigation">
            <nav>
              <ul>
                <li>
                  <a href="#" className="navigation-01__text">Joyas y Accesorios</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Ropa y Zapatos</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Casa y Decoración</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Fiesta y Bodas</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Juegos y Entretenimiento</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Arte y Coleccionables</a>
                </li>
                <li>
                  <a href="#" className="navigation-01__text">Herramientas y Manualidades</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
