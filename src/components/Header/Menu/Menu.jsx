import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../firebase'
import useAuth from '../../../hooks/useAuth'
import Button from '../../Button'
import MenuButtons from './MenuButtons'
import MenuNav from './MenuNav'

const Menu = ({ isOpen, setIsOpen }) => {
	const user = useAuth()

	const handleSignOut = () => {
		signOut(auth)
	}

	return (
		<div
			className={`fixed md:static ${
				isOpen ? 'top-0' : '-top-[100vh]'
			} left-0 flex flex-col md:flex-row flex-auto items-center justify-between gap-6 w-full md:w-auto h-screen md:h-auto py-16 md:py-0 bg-[#131313] md:bg-transparent transition-all md:transition-none duration-300 z-10`}
		>
			<MenuNav setIsOpen={setIsOpen} type='header' />
			{user ? (
				<div className='flex items-center gap-3'>
					<p className='text-xl'>{user.displayName}</p>
					<Button
						onClick={handleSignOut}
						type='submit'
						variant='contained'
						className='px-5 py-3'
					>
						Log out
					</Button>
				</div>
			) : (
				<MenuButtons setIsOpen={setIsOpen} />
			)}
		</div>
	)
}

export default Menu
