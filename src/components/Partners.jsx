import "./Partners.css";
import Partner1 from "../assets/partner-1.svg";
import Partner2 from "../assets/partner-2.svg";
import Partner3 from "../assets/partner-3.svg";
import Partner4 from "../assets/partner-4.svg";
import Partner5 from "../assets/partner-5.svg";
import Partner6 from "../assets/partner-6.svg";


const Partners = () => {

  const partnertImages = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
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