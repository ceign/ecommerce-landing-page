import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__main">
          <figure>
            <img src="https://picsum.photos/800/600?random=1" alt="Imagen" />
          </figure>
        </div>

        <div className="gallery__items">
          <ul className="gallery__items-wrapper">
            <li>
              <figure>
                <img src="https://picsum.photos/800/600?random=2" alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://picsum.photos/800/600?random=2" alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://picsum.photos/800/600?random=2" alt="Imagen" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://picsum.photos/800/600?random=2" alt="Imagen" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Gallery