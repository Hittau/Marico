import React from 'react'
import MenuNav from './Header/Menu/MenuNav'
import Logo from './Logo'

const Footer = () => {
	return (
		<footer>
			<div className='container flex flex-col md:flex-row justify-between items-center gap-6'>
				<div>
					<Logo maxWidth={196} />
					<span className='text-cobble-200 pt-3'>info@marico.co</span>
				</div>
				<MenuNav type='footer' />
			</div>
		</footer>
	)
}

export default Footer
