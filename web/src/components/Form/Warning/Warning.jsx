import React from 'react'
import './Warning.css'

const Warning = ({children}) => {
    return (
        // eslint-disable-next-line jsx-a11y/heading-has-content
        <h2 className="input-warning">{children}</h2>
    )
}

export default Warning