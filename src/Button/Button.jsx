import PropTypes from 'prop-types';

const Button = ({ type, text, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
