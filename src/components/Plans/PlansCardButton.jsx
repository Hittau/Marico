import React from 'react'

const PlansCardButton = ({ className, children, highlighted }) => {
	return (
		<button
			className={`${className} text-base md:text-lg lg:text-xl xl:text-2xl font-medium w-full px-3 ${
				highlighted
					? 'bg-white border-white text-ocean-100'
					: 'border-ocean-200 hover:bg-white hover:border-white hover:text-ocean-200'
			} border-2 rounded-xl transition-colors duration-300`}
		>
			{children}
		</button>
	)
}

export default PlansCardButton
