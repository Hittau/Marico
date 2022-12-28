import React from 'react'
import PlansCardOption from './PlansCardOption'

const PlansCardOptions = ({ options }) => {
	return (
		<ul className='flex flex-col gap-3 sm:gap-5'>
			{options.map(option => (
				<PlansCardOption key={option} option={option} />
			))}
		</ul>
	)
}

export default PlansCardOptions
