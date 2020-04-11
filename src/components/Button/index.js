import React from 'react'
import './button.scss'

const Button = ({message = 'Hello world'}) => (
	<button>{message}</button>
)

export default Button
