import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import "./Gallery.css";
import Model1 from "../assets/model-a.jpg";
import Model2 from "../assets/model-b.jpg";
import GridModelA from "../assets/grid-model-a.jpg";
import GridModelB from "../assets/grid-model-b.jpg";
import GridModelC from "../assets/grid-model-c.jpg";
import GridModelD from "../assets/grid-model-d.jpg";

const Gallery = () => {
  const figureRef = useRef(null);

  useEffect(() => {
    if (figureRef.current) {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = Model1;
      img2.src = Model2;

      Promise.all([
        new Promise((resolve) => {
          img1.onload = () => resolve();
        }),
        new Promise((resolve) => {
          img2.onload = () => resolve();
        }),
      ]).then(() => {
        const ratio1 = img1.naturalWidth / img1.naturalHeight;
        const ratio2 = img2.naturalWidth / img2.naturalHeight;
        const averageRatio = (ratio1 + ratio2) / 1;

        new hoverEffect({
          parent: figureRef.current,
          intensity: 0.2,
          image1: Model1,
          image2: Model2,
          displacementImage: Model2,
          imagesRatio: averageRatio,
          speedIn: 2,
          speedOut: 2,
          hover: true
        });
      });
    }
  }, []);

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__main">
          <figure ref={figureRef}></figure>
        </div>


        <div className="gallery__items">

          <ul className="gallery__items-wrapper">
            <li>
              <figure>
                <img src={GridModelA} alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src={GridModelB} alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src={GridModelC} alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src={GridModelD} alt="Imagen" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Gallery