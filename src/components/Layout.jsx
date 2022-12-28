import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='flex-auto'>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
