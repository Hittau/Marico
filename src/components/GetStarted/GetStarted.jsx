import React from 'react'
import Button from '../Button'
import Online from '../Online/Online'
import Title from '../Title'
import LogoLabel from '../../assets/logo-label.svg'
import Subtitle from '../Subtitle'

const GetStarted = () => {
	return (
		<section>
			<div className='container flex flex-col justify-center text-center items-center gap-6 py-24 sm:py-28 md:py-32 lg:py-36 xl:py-44'>
				<img src={LogoLabel} className='w-full max-w-[154px]' alt='Marico' />
				<div>
					<Title capitalize={true}>get started now</Title>
					<Subtitle color='white'>
						Setup is easy and takes under 5 minutes.
					</Subtitle>
				</div>
				<Button
					to='/pricing'
					variant='contained'
					className='px-12 md:px-14 lg:px-16 xl:px-16 py-3 md:py-4 xl:py-5 w-full sm:w-max'
				>
					get started now
				</Button>
				<Online />
			</div>
		</section>
	)
}

export default GetStarted
