
import "./Button.css";

const Button = ({ children , onClick, type}) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
