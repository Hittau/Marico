import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuNavItem = ({ name, path, setIsOpen, type }) => {
	const handleClick = () => {
		setIsOpen(false)
		document.body.style.overflowY = 'scroll'
	}

	return (
		<li>
			<NavLink
				to={path}
				onClick={handleClick}
				className={({ isActive }) =>
					`capitalize ${
						type === 'header' ? 'text-2xl md:text-lg' : 'text-lg'
					} lg:text-xl font-medium ${
						isActive ? 'text-ocean-100' : 'faded-text'
					}`
				}
			>
				{name}
			</NavLink>
		</li>
	)
}

export default MenuNavItem
