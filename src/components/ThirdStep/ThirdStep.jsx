import React from 'react'
import { thirdStepItems } from '../../utils/consts'
import Desc from '../Desc/Desc'
import Step from '../Step'
import StepImg from '../../assets/third-step.png'

const ThirdStep = () => {
	return (
		<section>
			<div className='container'>
				<Step
					className='py-24 sm:py-28 md:py-32 lg:py-36 xl:py-44'
					title='send emails & text messages'
					subtitle='No more going through a social platform. Reach and engage
                    your audience directly over email and text massage.'
					sn='3'
				/>
				<div className='flex flex-col-reverse xl:flex-row justify-between items-center gap-8'>
					<Desc
						className='max-w-3xl'
						label='create & share'
						title='reach your audience'
						highlighted=' directly.'
						list={thirdStepItems}
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

export default ThirdStep
