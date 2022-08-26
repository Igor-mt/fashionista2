
import "./Button.css";

const Button = ({ type, children }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
