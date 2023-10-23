import "./CTAButton.css";
import { FaShoppingBag } from "react-icons/fa";

const CTAButton = () => {
  return (
    <button className="hero__button cta-button button-l">
      <span>
        <FaShoppingBag />
      </span>
      Comprar Ahora
    </button>
  )
}

export default CTAButton