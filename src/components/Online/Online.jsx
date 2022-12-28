import React from 'react'
import OnlineTag from './OnlineTag'

const Online = () => {
	return (
		<div className='flex justify-center items-center gap-4 text-cobble-200 text-base sm:text-xl lg:text-2xl pt-5'>
			<OnlineTag />
			<span className='text-white font-bold'>1000+</span> creators have already
			started
		</div>
	)
}

export default Online
