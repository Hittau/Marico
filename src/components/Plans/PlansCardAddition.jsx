import React from 'react'

const PlansCardAddition = ({ addition, highlighted }) => {
	return (
		<span
			className={`text-base lg:text-lg xl:text-xl ${
				highlighted ? 'text-white' : 'text-cobble-100'
			} self-center`}
		>
			{addition}
		</span>
	)
}

export default PlansCardAddition
