import React from 'react'
import Subtitle from './Subtitle'
import Suptitle from './Suptitle'
import Title from './Title'

const Step = ({ title, subtitle, sn, className }) => {
	return (
		<div
			className={`${
				className ? className : ''
			} flex flex-col items-center text-center`}
		>
			<Suptitle>step {sn}</Suptitle>
			<Title capitalize={true}>{title}</Title>
			<Subtitle className='max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
				{subtitle}
			</Subtitle>
		</div>
	)
}

export default Step
