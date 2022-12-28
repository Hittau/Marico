import React from 'react'
import { Link } from 'react-router-dom'

const FormRedirect = ({ type }) => {
	return type === 'register' ? (
		<span>
			Already have an account?{' '}
			<Link to='/login' className='underline'>
				Please Log in.
			</Link>
		</span>
	) : (
		<span>
			Don’t have an account?{' '}
			<Link to='/register' className='underline'>
				Create one.
			</Link>
		</span>
	)
}

export default FormRedirect
