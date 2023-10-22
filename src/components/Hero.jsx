import HeroText from "./HeroText";
import CTAButton from "./CTAButton";
import "../App.css";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <HeroText />
          <CTAButton />
        </div>
      </section>
    </>
  )
}

export default Hero