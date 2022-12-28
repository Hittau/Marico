import React from 'react'
import { contentSources } from '../../utils/consts'
import ContentSourcesCard from './ContentSourcesCard'

const ContentSourcesCards = () => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] justify-center gap-6'>
			{contentSources.map(({ icon, iconColor, name, desc }) => (
				<ContentSourcesCard
					key={name}
					icon={icon}
					iconColor={iconColor}
					name={name}
					desc={desc}
				/>
			))}
		</div>
	)
}

export default ContentSourcesCards
