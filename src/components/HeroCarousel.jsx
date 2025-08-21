import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../App.css";
import "./HeroCarousel.css";
import carousel1 from "../assets/hero-carousel-1.jpg";
import carousel2 from "../assets/hero-carousel-2.jpg";
import carousel3 from "../assets/hero-carousel-3.jpg";


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

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      {showNavigation && (
        <div className="hero__carousel">
          <div className="hero__carousel-wrapper">
            <figure ref={sliderRef} className="keen-slider">
              <img className="keen-slider__slide number-slide1" src={carousel1} alt="" />
              <img className="keen-slider__slide number-slide2" src={carousel2} alt="" />
              <img className="keen-slider__slide number-slide3" src={carousel3} alt="" />
            </figure>
            <span></span>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroCarousel