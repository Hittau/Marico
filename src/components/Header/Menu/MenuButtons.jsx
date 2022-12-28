import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'

const MenuButtons = ({ setIsOpen }) => {
	const handleClick = () => {
		setIsOpen(false)
		document.body.style.overflowY = 'scroll'
	}

	return (
		<div className='flex items-center gap-4'>
			<Link
				to='/login'
				onClick={handleClick}
				className='faded-text text-xl font-medium capitalize p-2'
			>
				login
			</Link>
			<Button
				to='/register'
				variant='contained'
				onClick={handleClick}
				className='px-[22px] py-3'
			>
				sign up
			</Button>
		</div>
	)
}

export default MenuButtons
