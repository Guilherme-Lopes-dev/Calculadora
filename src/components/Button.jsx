import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
} 
 
 //Se a propiedade operation for passada ao botão, irá adicionar a classe operation ou adicione nada
   //Aplica a classe ou não, de acordo com as propiedades 