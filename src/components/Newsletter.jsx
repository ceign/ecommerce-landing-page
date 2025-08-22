import "./Newsletter.css";
import { FaInstagram } from "react-icons/fa";
import img1 from "../assets/card.png";
import img2 from "../assets/card-1.png";
import img3 from "../assets/card-2.png";
import img4 from "../assets/card-3.png";
import img5 from "../assets/card-4.png";
import img6 from "../assets/card-5.png";

const Newsletter = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <h2>Sigue nuestros productos y descuentos en Instagram</h2>

        <div className="newsletter__image-grid">
          {images.map((src, idx) => (
            <div key={idx} className="newsletter__image-item">
              <img src={src} alt={`Post ${idx + 1}`} />
              <div className="newsletter__overlay">
                <FaInstagram className="newsletter__icon" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="newsletter__subtitle">O suscríbete al boletín</h2>
        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Correo Electrónico..."
            className="newsletter__input"
            required
            maxLength={30}
          />
          <button type="submit" className="newsletter__submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
