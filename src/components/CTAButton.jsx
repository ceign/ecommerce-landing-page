import "./CTAButton.css";

const CTAButton = ({ text, Icon }) => {
  return (
    <button className="hero__button cta-button button-l">
      {Icon && (
        <span className="cta-button__icon">
          <Icon />
        </span>
      )}
      {text}
    </button>
  );
};

export default CTAButton;
