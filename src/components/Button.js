import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ content, color, onClicked }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className='btn'
            onClick={onClicked}
        >{content}</button>
    )
}

Button.defaultProps = {
    content: "Click me",
    color: 'green',
    onClicked: () => console.log("Nothing to do"),
}

export default Button
