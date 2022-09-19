
import "./SelecionarOpcao.css"

const SelecionarOpcao = ({name}) => {
    return ( 
        <select name={name} className="select">
            <option value="">-</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
        </select>
    );
}
 
export default SelecionarOpcao;