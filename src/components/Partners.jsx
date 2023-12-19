import "./Partners.css";

const Partners = () => {

  const partnertImages = [
    "/src/assets/partner-1.svg",
    "/src/assets/partner-2.svg",
    "/src/assets/partner-3.svg",
    "/src/assets/partner-4.svg",
    "/src/assets/partner-5.svg",
    "/src/assets/partner-6.svg",
  ];

  return (
    <div className="partners">
      <div className="partners__wrapper">
        <ul>
          {partnertImages.map((image, index) => (
            <li key={index}>
              <img src={image} alt="Socios" />
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Partners