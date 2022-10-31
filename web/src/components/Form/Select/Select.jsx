import React from 'react'

import './Select.css'

const Select = ({ name, id, placeholder, required, itens, value }) => {
    return (
        <div className='select-container'>
            <select name={name} id={id} className="select-component" required={required} value={value}>
                <option selected disabled>
                    {placeholder}
                </option>
                {itens.map((item) => (
                    <option key={item.id} value={item.nome || item.sigla}>
                        {item.nome || item.sigla}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select