import React from 'react'
import AboutDesc from './AboutDesc'
import Paragraphs from './Paragraphs/Paragraphs'

const AboutMainContent = () => {
	return (
		<section>
			<div className='about-container relative flex flex-col items-center pt-32 sm:pt-36 xl:pt-44 pb-14 after:absolute after:bottom-0 after:w-full after:h-[2px] after:bg-cobble-200 after:bg-opacity-50'>
				<AboutDesc />
				<Paragraphs />
			</div>
		</section>
	)
}

export default AboutMainContent
