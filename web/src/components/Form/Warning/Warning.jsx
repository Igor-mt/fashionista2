import React from 'react'
import './Warning.css'

const Warning = ({children}) => {
    return (
        <h2 className="input-warning">{children}</h2>
    )
}

export default Warning