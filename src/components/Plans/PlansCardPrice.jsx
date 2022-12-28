import React from 'react'

const PlansCardPrice = ({ price, highlighted }) => {
	return (
		<h4 className='text-3xl lg:text-4xl xl:text-5xl text-white font-bold capitalize'>
			{price}
			{price !== 'free' && (
				<span
					className={`text-sm md:text-base xl:text-lg font-normal ${
						highlighted ? 'text-white' : 'text-cobble-100'
					} ml-2`}
				>
					Per month
				</span>
			)}
		</h4>
	)
}

export default PlansCardPrice
