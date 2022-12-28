import React from 'react'
import Button from '../Button'

const HeroButtons = () => {
	return (
		<div className='flex flex-col sm:flex-row gap-6'>
			<Button
				to='/pricing'
				variant='contained'
				className='px-12 py-4 basis-1/2'
			>
				get started now
			</Button>
			<Button to='/blog' variant='outlined' className='px-12 py-4 basis-1/2'>
				view a demo
			</Button>
		</div>
	)
}

export default HeroButtons
