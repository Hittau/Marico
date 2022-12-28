import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, onClick, children, variant, to: path, type }) => {
	const Tag = type === 'submit' ? 'button' : Link

	return (
		<Tag
			to={path}
			onClick={onClick}
			type={type}
			className={`${className ? className : ''} ${
				variant === 'contained'
					? 'bg-ocean-200 hover:bg-ocean-100'
					: 'bg-black text-cobble-200 border border-cobble-200 hover:text-white hover:bg-ocean-200 hover:border-ocean-200'
			} text-lg sm:text-xl capitalize flex justify-center items-center rounded-lg whitespace-nowrap transition-all duration-300`}
		>
			{children}
		</Tag>
	)
}

export default Button
