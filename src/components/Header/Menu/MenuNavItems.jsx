import React from 'react'
import { menuNavItems } from '../../../utils/consts'
import MenuNavItem from './MenuNavItem'

const MenuNavItems = ({ setIsOpen, type }) => {
	return (
		<ul
			className={`flex ${
				type === 'header' ? 'flex-col md:flex-row' : ''
			} gap-6 lg:gap-9`}
		>
			{menuNavItems.map(({ name, path }) => (
				<MenuNavItem
					key={path}
					name={name}
					path={path}
					setIsOpen={setIsOpen}
					type={type}
				/>
			))}
		</ul>
	)
}

export default MenuNavItems
