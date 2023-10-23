import { useState, useEffect } from "react";
import "../App.css";
import "./HeroCarousel.css";
import Carousel from "../assets/hero-carousel.jpeg";

const HeroCarousel = () => {

  // Hide navigation on mobile
  const [showNavigation, setShowNavigation] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => setShowNavigation(window.innerWidth > 992);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      {showNavigation && (
        <div className="hero__carousel">
          <div className="hero__carousel-wrapper">
            <figure>
              <img src={Carousel} alt="" />
            </figure>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroCarousel