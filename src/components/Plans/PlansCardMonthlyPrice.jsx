import React from 'react'

const PlansCardMonthlyPrice = ({ monthlyPrice, highlighted }) => {
	return (
		monthlyPrice && (
			<span
				className={`text-sm md:text-base xl:text-lg ${
					highlighted ? 'text-white' : 'text-cobble-100'
				} underline`}
			>
				or {monthlyPrice}/mo, billed monthly
			</span>
		)
	)
}

export default PlansCardMonthlyPrice
