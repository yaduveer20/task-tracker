import React from 'react'
import PropTypes from 'prop-types'


const Button = ({name, color, onClick})=>{
    console.log('color', color);
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    handlerButtonClick: PropTypes.func.isRequired
}

export default Button