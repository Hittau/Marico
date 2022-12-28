import React from 'react'
import SignUpButton from '../SignUpButton'

const FormSignUpButton = ({
	name,
	icon: Icon,
	handleClick,
	type,
	iconColor: color,
}) => {
	return (
		<SignUpButton onClick={handleClick}>
			<Icon size={34} color={color} />
			<span className='hidden md:inline'>
				{type === 'register' ? 'Sign up' : 'Login'} with {name}
			</span>
		</SignUpButton>
	)
}

export default FormSignUpButton
