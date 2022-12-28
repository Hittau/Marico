import React from 'react'
import Button from '../Button'
import Step from '../Step'
import StepImg from '../../assets/step-1.png'
import Desc from '../Desc/Desc'
import { firstStepItems } from '../../utils/consts'

const FirstStep = () => {
	return (
		<section>
			<div className='container py-24 sm:py-28 md:py-32 lg:py-36 xl:py-44'>
				<div className='flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-44'>
					<Step
						title='connect your content'
						subtitle='Bring all of your content together and get a Homepage that
	          automatically updates whenever you create anywhere online.'
						sn='1'
					/>
					<Button
						to='/blog'
						variant='outlined'
						className='py-4 px-6 lg:py-5 xl:px-[26px] xl:py-6'
					>
						view available sources
					</Button>
				</div>
				<div className='flex flex-col-reverse xl:flex-row justify-between items-center gap-4 md:gap-8'>
					<Desc
						className='xl:max-w-xl'
						label='your homepage'
						title='your content. all in'
						highlighted=' one spot'
						list={firstStepItems}
					/>
					<img
						src={StepImg}
						className='xl:absolute right-0 max-w-full xl:max-w-2xl 2xl:max-w-full'
						alt='img'
					/>
				</div>
			</div>
		</section>
	)
}

export default FirstStep
