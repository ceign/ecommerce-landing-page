import HeroText from "./HeroText";
import HeroCarousel from "./HeroCarousel";
import "../App.css";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <HeroText />
          <HeroCarousel />
        </div>
      </section>
    </>
  )
}

export default Hero