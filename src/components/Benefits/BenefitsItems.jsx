import React from 'react'
import { benefitsItems } from '../../utils/consts'
import BenefitsItem from './BenefitsItem'

const BenefitsItems = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between gap-14 md:gap-10 pt-16'>
			{benefitsItems.map(({ title, subtitle, img }) => (
				<BenefitsItem key={title} title={title} subtitle={subtitle} img={img} />
			))}
		</div>
	)
}

export default BenefitsItems
