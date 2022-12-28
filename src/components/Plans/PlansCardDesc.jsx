import React from 'react'

const PlansCardDesc = ({ desc, highlighted }) => {
	return (
		<p
			className={`text-base lg:text-lg xl:text-xl ${
				highlighted ? 'text-white' : 'text-cobble-100'
			}`}
		>
			{desc}
		</p>
	)
}

export default PlansCardDesc
