
import "./Button.css";

const Button = ({ type, children }) => {
  return (
    <button className="button_checkout" type={type}>
      {children}
    </button>
  );
};

export default Button;
