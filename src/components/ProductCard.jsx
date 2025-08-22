import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-card__wrapper">
      <div className="product-card__img-wrapper">
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <figure>
          <img
            src={product.image}
            alt={
              product.alt
                ? product.alt
                : product.name
                  ? `Imagen de ${product.name}`
                  : ""
            }
          />
        </figure>
      </div>
    </div>
    <div className="product-card__info">
      <h3 className="card">{product.name}</h3>
      <div>
        <a href="#" onClick={(e) => e.preventDefault()}><span className="product-card__type">{product.type}</span></a>
        <div className="product-card__prices">
          {product.oldPrice && <span className="product-card__old-price">{product.oldPrice}</span>}
          <span className="product-card__price card">{product.price}</span>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    badge: PropTypes.string,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    oldPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
