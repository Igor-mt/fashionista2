import React from 'react'

import './Select.css'

const Select = ({name, id, placeholder, required, itens}) => {
    return (
        <select name={name} id={id} className="select-component" required={required}>
            <option selected disabled>
                {placeholder}
            </option>
            {itens.map((item) => (
                <option key={item.id} value={item.nome || item.sigla}>
                    {item.nome || item.sigla}
                </option>
            ))}
        </select>
    )
}

export default Select