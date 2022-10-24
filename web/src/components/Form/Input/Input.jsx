
import AvisoValidacao from "../../AvisoValidacao/AvisoValidacao";
import "./Input.css"

const Input = ({ title, type, img, name, value, placeholder, pattern, maxLenght, onChange, onBlur, required, defaultValue }) => {

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
                defaultValue={defaultValue}
            />
            {img && <img src={img} alt="imagem modo pagamento" />}
        </label>
    );
}

export default Input;