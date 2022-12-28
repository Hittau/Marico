import React from 'react'
import Logo from '../Logo'
import Subtitle from '../Subtitle'
import Suptitle from '../Suptitle'
import Title from '../Title'

const AboutDesc = () => {
	return (
		<>
			<Logo className='hidden md:block pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12' />
			<div className='text-center pb-[10vh]'>
				<Suptitle>our mission</Suptitle>
				<Title>We exist to help creators own their audience.</Title>
				<Subtitle color='white'>
					We believe that social platforms are taking advantage of creators. We
					want to change that and help creators fight back.
				</Subtitle>
			</div>
		</>
	)
}

export default AboutDesc
