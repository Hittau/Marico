import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo'
import Burger from './Burger'
import Menu from './Menu/Menu'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const headerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY) {
				headerRef.current.classList.add('scrolled')
			} else {
				headerRef.current.classList.remove('scrolled')
			}
		}

		window.addEventListener('scroll', () => {
			handleScroll()
		})

		return () => {
			window.removeEventListener('scroll', () => {
				handleScroll()
			})
		}
	}, [])

	return (
		<header
			ref={headerRef}
			className='fixed top-0 w-full bg-black bg-opacity-60 backdrop-blur py-6 sm:py-8 md:py-11 transition-all duration-300 z-10'
		>
			<div className='container flex justify-between items-center gap-6'>
				<Logo maxWidth={196} />
				<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
				<Burger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</header>
	)
}

export default Header
