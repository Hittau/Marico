import React from 'react'
import Title from '../Title'

const SecondStepCard = ({ label, title, highlighted, additionalEl }) => {
	return (
		<div
			className={`flex flex-col basis-1/2 bg-[#0d0d0d] ${
				!additionalEl ? 'pb-5 md:pb-6 lg:pb-7 xl:pb-8' : ''
			} pt-5 md:pt-6 lg:pt-7 xl:pt-8 pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-11 overflow-hidden`}
		>
			<span className='text-[#0fc65c] text-3xl capitalize'>{label}</span>
			<Title
				variant='h2'
				capitalize={true}
				className='max-w-[80%] text-[#919191]'
			>
				{title} <span className='text-white'> {highlighted}</span>
			</Title>
			{additionalEl}
		</div>
	)
}

export default SecondStepCard
