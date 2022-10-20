
import AvisoValidacao from "../../AvisoValidacao/AvisoValidacao";
import "./Input.css"

const Input = ({ title, type, img, name, value, placeholder, pattern, maxLenght, onChange, onBlur, required }) => {

    return (
        <label>
            {title && <span className="input-label">{title}{required && <AvisoValidacao />}</span>}
            <input
                type={type}
                required={required}
                name={name}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                maxLength={maxLenght}
                onChange={onChange}
                onBlur={onBlur}
            />
            {img && <img src={img} alt="imagem modo pagamento" />}
        </label>
    );
}

export default Input;