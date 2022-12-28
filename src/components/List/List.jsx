import React from 'react'
import ListItem from './ListItem'

const List = ({ content }) => {
	return (
		<ol className='flex flex-col gap-[10px] pt-4 sm:pt-5 md:pt-6 lg:pt-7 pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16'>
			{content.map(({ text }) => (
				<ListItem key={text} content={text} />
			))}
		</ol>
	)
}

export default List
