import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.svg'

const Logo = ({ className, maxWidth }) => {
	return (
		<Link
			to='/'
			className={`flex flex-auto justify-center md:justify-start items-center gap-4 logo ${className}`}
		>
			<img
				src={LogoImg}
				className='transition-all duration-300'
				style={{ maxWidth: `${maxWidth}px` }}
				alt='logo'
			/>
		</Link>
	)
}

export default Logo
