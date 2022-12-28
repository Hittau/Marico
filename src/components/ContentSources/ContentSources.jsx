import React from 'react'
import Title from '../Title'
import ContentSourcesCards from './ContentSourcesCards'
import Subtitle from '../Subtitle'

const ContentSources = () => {
	return (
		<section>
			<div className='container py-[15vh]'>
				<div className='text-center pb-[7vh]'>
					<Title capitalize={true}>content sources</Title>
					<Subtitle color='white'>
						Connect these sources to your Marico homepage.
					</Subtitle>
				</div>
				<ContentSourcesCards />
			</div>
		</section>
	)
}

export default ContentSources
