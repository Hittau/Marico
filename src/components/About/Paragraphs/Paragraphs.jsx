import React from 'react'
import { paragraphs } from '../../../utils/consts'

const Paragraphs = () => {
	return (
		<div className='flex flex-col gap-10'>
			{paragraphs.map(({ content }) => (
				<p className='text-base sm:text-lg md:text-xl'>{content}</p>
			))}
			<span className='font-bold'>
				- The Team Marico (Olivia, William, and Noah){' '}
			</span>
		</div>
	)
}

export default Paragraphs
