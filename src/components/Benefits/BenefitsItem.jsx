import React from 'react'

const BenefitsItem = ({ title, subtitle, img }) => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<h5 className='flex items-center gap-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold capitalize  whitespace-nowrap'>
				<img src={img} className='max-w-[40px]' alt='' />
				{title}
			</h5>
			<p className='text-lg lg:text-xl xl:text-[22px] text-cobble-200'>
				{subtitle}
			</p>
		</div>
	)
}

export default BenefitsItem
