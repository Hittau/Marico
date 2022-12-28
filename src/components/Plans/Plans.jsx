import React from 'react'
import Title from '../Title'
import PlansCards from './PlansCards'

const Plans = () => {
	return (
		<section>
			<div className='pt-[15vh] container text-center '>
				<Title className='pb-10 px-4'>
					Choose the plan that's right for you
				</Title>
			</div>
			<div className='container pr-[0!important] lg:pr-[16px!important]'>
				<PlansCards />
			</div>
		</section>
	)
}

export default Plans
