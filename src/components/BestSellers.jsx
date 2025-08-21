import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./BestSellers.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import ProductGridFilters from "./ProductGridFilters";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/product-4.png";
import product5 from "../assets/product-5.png";
import product6 from "../assets/product-6.png";
import product7 from "../assets/product-7.png";
import product8 from "../assets/product-8.png";

const bestSellers = [
  {
    name: "Adicolor Classics Joggers",
    type: "Joggers",
    price: "$63.85",
    image: product6,
    alt: "Adicolor Classics Joggers",
    badge: null,
    oldPrice: null,
  },
  {
    name: "Nike  Futura Luxe",
    type: "Mochilas",
    price: "$130.00",
    image: product5,
    alt: "Nike Sportswear Futura Luxe",
    badge: null,
    oldPrice: null,
  },
  {
    name: "Geometric Print Scarf",
    type: "Bufandas",
    price: "$53.00",
    image: product4,
    alt: "Geometric Print Scarf",
    badge: null,
    oldPrice: null,
  },
  {
    name: "Yellow Reserved Hoodie",
    type: "Hoodies",
    price: "$155.00",
    image: product1,
    alt: "Yellow Reserved Hoodie",
    badge: "50% desct.",
    oldPrice: "$310.00",
  },
  {
    name: "Nature Dress",
    type: "Vestidos",
    price: "$79.00",
    image: product2,
    alt: "Dress Green",
    badge: "Sustentable",
    oldPrice: null,
  },
  {
    name: "Nike Air Zoom Pegasus",
    type: "Zapatillas",
    price: "$198.00",
    image: product3,
    alt: "Nike Air Zoom Pegasus producto",
    badge: "10% desct.",
    oldPrice: "$220.00",
  },
  {
    name: "Nike Repel Miller",
    type: "Entreno",
    price: "$120.50",
    image: product8,
    alt: "Nike Repel Miller producto",
    badge: null,
    oldPrice: null,
  },
  {
    name: "Sportswear Futura Luxe",
    type: "Gafas",
    price: "$160.00",
    image: product7,
    alt: "Nike Sportswear Futura",
    badge: null,
    oldPrice: null,
  },
];

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <div className="best-sellers__wrapper">
        <h2 className="best-sellers__title">Más Vendidos</h2>
        <div className="product-grid__header">
          <ProductGridFilters />
        </div>
        <div className="product-grid__list">
          <div className="product-grid__slider-wrapper">
            <Swiper
              spaceBetween={16}
              slidesPerView="auto"
              breakpoints={{
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                }
              }}
              pagination={{ clickable: true, dynamicBullets: false }}
              navigation={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              modules={[Pagination, Autoplay, Navigation]}
            >
              {bestSellers.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
