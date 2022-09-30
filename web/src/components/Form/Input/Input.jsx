
import "./Input.css"

const Input = ({title, type,img, name, value, placeholder, pattern, maxLenght, onChange}) => {

    return ( 
        <label>
            {title && <span>{title}</span>}
            <input type={type} name={name} value={value} placeholder={placeholder} pattern={pattern} maxLength={maxLenght} onChange={onChange}/>
            {img && <img src={img} alt="imagem modo pagamento"/>}    
        </label>
    );
}
 
export default Input;