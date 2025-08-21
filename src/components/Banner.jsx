import "./Banner.css";
import CTAButton from "./CTAButton";
import logo from "../assets/logo-zara.png";

const HeroBanner = () => {
  return (
    <section className="banner">
      <div className="banner__overlay"></div>

      <div className="banner__content">
        <img src={logo} alt="Banner logo" />
        <p className="banner__text">
          Lujoso pero discreto. La nueva colección de ropa de noche, ofrecida
          exclusivamente en la reapertura de la boutique Giorgio Armani en Los
          Ángeles.
        </p>
        <CTAButton text="Ver Colección" />
      </div>
    </section>
  );
};

export default HeroBanner;
