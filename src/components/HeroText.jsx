import "../App.css";
import "./HeroText.css";
import CTAButton from "./CTAButton";


const HeroText = () => {
  return (
    <div className="hero__text">
      <div className="hero__text-wrapper">
        <h1 className="hero__text-title body-01">Collections</h1>

        <p className="hero__text-paragraph paragraph-l">
          Tu pasión por las marcas, nuestras colecciones ilimitadas. ¡Comienza a explorar!
        </p>

        <CTAButton />
      </div>
    </div>
  )
}

export default HeroText