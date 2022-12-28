import React from 'react'

const ListItem = ({ content }) => {
	return (
		<li
			key={content}
			className='before:content-[counter(li)] before:inline-flex before:justify-center before:items-center before:bg-[#2d2d2d] before:w-8 before:h-8 before:mr-3 before:rounded-full'
			style={{ counterIncrement: 'li' }}
		>
			{content}
		</li>
	)
}

export default ListItem
