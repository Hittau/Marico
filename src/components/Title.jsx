import React from 'react'

const Title = ({ children, className, variant, capitalize }) => {
	const Tag = variant ? variant : 'h3'

	return (
		<Tag
			className={`${
				className ? className : ''
			} text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
				variant === 'h2' ? 'xl:text-[80px]' : 'xl:text-[75px]'
			} leading-[1.5!important] font-semibold ${
				capitalize ? 'capitalize' : ''
			}`}
		>
			{children}
		</Tag>
	)
}

export default Title
