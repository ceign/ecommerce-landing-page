import "./CTAButton.css";
import { FaShoppingBag } from "react-icons/fa";

const CTAButton = () => {
  return (
    <button className="cta-button button-l">
      <span>
        <FaShoppingBag />
      </span>
      Ir a comprar
    </button>
  )
}

export default CTAButton