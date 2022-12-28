import React from 'react'
import Title from '../Title'

const Achievement = () => {
	return (
		<section className='bg-[url(../src/assets/achievement.png)] bg-cover'>
			<div className='container'>
				<Title
					variant='h4'
					capitalize={true}
					className='text-center py-36 sm:py-44 md:py-52 lg:py-64 xl:py-80'
				>
					We've helped over 1,000 creators claim control of their audience.
				</Title>
			</div>
		</section>
	)
}

export default Achievement
