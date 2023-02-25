import PropTypes from "prop-types";

const Button = ({ bgcolor, text, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: bgcolor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
