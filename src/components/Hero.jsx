import HeroText from "./HeroText";
import CTAButton from "./CTAButton";
import "../App.css";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <HeroText />
        <CTAButton />
      </section>
    </>
  )
}

export default Hero