import React from "react";
import "../App.css";
import "./Header.css";
import logo from "../assets/logo.png";
import { FaShoppingBag } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">

        <div className="header__top">
          <div className="header__searchbar">
            <input type="text" placeholder="Buscar" />
          </div>

          <div className="header__logo">
            <figure>
              <a href="/">
                <img src={logo} alt="Logo" className="header__logo-image" />
              </a>
            </figure>
            <span></span>
          </div>

          <div className="header__buttons">
            <div className="header__account">
              <span>< BiSolidUser /></span>
              <button>Cuenta</button>
            </div>

            <div className="header__shopping-cart">
              <span> < FaShoppingBag /> </span>
              <button>Mis Compras</button>
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
