
import "./InputCheckout.css"

const InputCartao = ({titulo,type, name, placeholder}) => {

    return ( 
        <label>
            <span className="formCartao__titulo">{titulo}</span>
            <input type={type} name={name} className="formCartao__inputCartao" placeholder={placeholder}/>
        </label>
    );
}
 
export default InputCartao;