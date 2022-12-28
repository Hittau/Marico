import React from 'react'
import HeroButtons from './HeroButtons'
import HeroTitle from './HeroTitle'
import Online from '../Online/Online'

const Hero = () => {
	return (
		<section className='h-max'>
			<div className='container flex flex-col justify-center items-center text-center pt-[25vh] pb-[12.5vh]'>
				<HeroTitle />
				<div className='pt-9 sm:pt-12 md:pt-20 lg:pt-28 xl:pt-[136px]'>
					<p className='text-[22px] sm:text-[28px] lg:text-[30px] xl:text-[40px] font-medium lg:max-w-[36.5rem] xl:max-w-[43.4rem] pb-12'>
						Turn your audience into email and text message subscribers.
					</p>
					<HeroButtons />
					<Online />
				</div>
			</div>
		</section>
	)
}

export default Hero
