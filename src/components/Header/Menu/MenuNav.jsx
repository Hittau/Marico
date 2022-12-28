import React from 'react'
import MenuNavItems from './MenuNavItems'

const MenuNav = ({ setIsOpen, type }) => {
	return (
		<nav className='flex flex-auto md:flex-grow-0 items-center text-center'>
			<MenuNavItems setIsOpen={setIsOpen} type={type} />
		</nav>
	)
}

export default MenuNav
