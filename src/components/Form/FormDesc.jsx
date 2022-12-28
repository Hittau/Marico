import React from 'react'
import Title from '../Title'

const FormDesc = ({ type }) => {
	return (
		<div>
			<Title capitalize={true}>
				{type === 'register' ? 'sign up' : 'login'}
			</Title>
			<p className='text-base md:text-lg lg:text-xl xl:text-2xl'>
				Fill all field for{' '}
				{type === 'register' ? 'create an account.' : 'login to your account'}
			</p>
		</div>
	)
}

export default FormDesc
