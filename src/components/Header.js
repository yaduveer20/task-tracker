import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title,buttonStatus,setButtonStatus}) => {
    const handlerButtonClick = ()=>{
        //toggle buttonStatus
        setButtonStatus(buttonStatus => !buttonStatus)
        console.log(buttonStatus);
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={buttonStatus ? 'red' : 'green'} name={buttonStatus ? 'Close' : 'Add'} onClick={handlerButtonClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    author: 'Gopal Khatri'
}

Header.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
}


export default Header
