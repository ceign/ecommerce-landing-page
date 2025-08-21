import { FiFilter } from "react-icons/fi";
import "./ProductGridFilters.css";

const ProductGridFilters = () => (
  <div className="product-grid__filters-bar">
    <nav className="product-grid__filters" aria-label="Product filters">
      <ul role="tablist">
        <li>
          <button role="tab" aria-selected="true" className="active">
            Todos
          </button>
        </li>
        <li>
          <button role="tab" aria-selected="false">Descuento</button>
        </li>
        <li>
          <button role="tab" aria-selected="false">Sustentable</button>
        </li>
        <li>
          <button role="tab" aria-selected="false">Entreno</button>
        </li>
      </ul>
      <button className="product-grid__filter-btn" aria-label="Open filter options">
        <FiFilter style={{ marginRight: "0.5rem", fontSize: "1rem", verticalAlign: "middle" }} />
        Filtros
      </button>
    </nav>
  </div>
);

export default ProductGridFilters;
