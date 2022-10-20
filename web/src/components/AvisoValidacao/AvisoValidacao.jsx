import React from 'react'
import './AvisoValidacao.css'

const AvisoValidacao = ({children}) => {
  return (
    <h2 className='aviso-validacao'>* {children}</h2>
  )
}

export default AvisoValidacao