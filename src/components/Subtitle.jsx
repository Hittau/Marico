import React from 'react'

const Subtitle = ({ children, color, className }) => {
	return (
		<p
			className={`${color === 'white' ? 'text-white' : 'text-cobble-200'} ${
				className ? className : ''
			} text-lg md:text-xl lg:text-2xl xl:text-3xl`}
		>
			{children}
		</p>
	)
}

export default Subtitle
