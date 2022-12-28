import React from 'react'
import Title from '../Title'
import FormFields from './FormFields'
import FormSignUpButtons from './FormSignUpButtons'
import FormRedirect from './FormRedirect'
import FormDesc from './FormDesc'

const Form = ({ type, handleSubmit }) => {
	return (
		<section className='h-full'>
			<div className='container flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 text-center h-full py-[20vh]'>
				<div className='flex flex-col justify-center flex-auto gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
					<FormDesc type={type} />
					<FormFields type={type} handleSubmit={handleSubmit} />
				</div>
				<div className='w-full'>
					<div className='pb-3 sm:pb-5 md:pb-7 lg:pb-9 xl:pb-11'>
						<Title capitalize={true}>or</Title>
						<p className='text-base md:text-lg lg:text-xl xl:text-2xl'>
							Sign up with...
						</p>
					</div>
					<FormSignUpButtons type={type} />
					<FormRedirect type={type} />
				</div>
			</div>
		</section>
	)
}

export default Form
