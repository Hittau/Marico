import React from 'react'

const Suptitle = ({ children }) => {
	return (
		<span className='text-base md:text-lg lg:text-xl xl:text-[25px] text-ocean-200 font-semibold uppercase'>
			{children}
		</span>
	)
}

export default Suptitle
