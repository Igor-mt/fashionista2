
import "./Input.css"

const Input = ({title, type,img, name, value, handleInputChange, placeholder, pattern, maxLenght}) => {

    return ( 
        <label>
            {title && <span>{title}</span>}
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={(e) => handleInputChange(e.target.value)} pattern={pattern} maxLength={maxLenght} />
            {img && <img src={img} alt="imagem modo pagamento"/>}    
        </label>
    );
}
 
export default Input;