import React from 'react'
import Title from '../Title'
import BenefitsItems from './BenefitsItems'

const Benefits = () => {
	return (
		<section>
			<div className='container text-center'>
				<Title capitalize={true}>why creators love marico</Title>
				<BenefitsItems />
			</div>
		</section>
	)
}

export default Benefits
