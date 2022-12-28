import React from 'react'
import Button from '../Button'
import Step from '../Step'
import SecondStepCards from './SecondStepCards'

const SecondStep = () => {
	return (
		<section>
			<div className='container flex flex-col items-center'>
				<Step
					title='share your homepage'
					subtitle="Share your Wavium homepage link with your followers, and
					we'll handle the rest."
					sn='2'
					className='pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-44'
				/>
				<SecondStepCards />
				<Button
					to='/pricing'
					variant='contained'
					className='py-4 px-20 xl:py-[22px]'
				>
					get started
				</Button>
			</div>
		</section>
	)
}

export default SecondStep
