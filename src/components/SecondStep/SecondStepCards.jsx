import React from 'react'
import { secondStepCards } from '../../utils/consts'
import SecondStepCard from './SecondStepCard'

const SecondStepCards = () => {
	return (
		<div className='flex flex-col lg:flex-row gap-6 pb-12'>
			{secondStepCards.map(({ label, title, highlighted, additionalEl }) => (
				<SecondStepCard
					key={title}
					label={label}
					title={title}
					highlighted={highlighted}
					additionalEl={additionalEl}
				/>
			))}
		</div>
	)
}

export default SecondStepCards
