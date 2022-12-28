import React from 'react'
import { ImArrowUpRight2 } from 'react-icons/im'

const TeamMember = ({ img, name, position, twitterLink }) => {
	return (
		<div className='flex flex-col items-center text-center'>
			<img
				src={img}
				className='rounded-full max-w-[80px] md:max-w-[96px] xl:max-w-[112px] pb-4'
				draggable={false}
				alt='img'
			/>
			<div className='pb-5'>
				<h6 className='text-lg md:text-xl xl:text-2xl font-bold capitalize'>
					{name}
				</h6>
				<p className='text-sm md:text-base xl:text-lg text-cobble-200 capitalize'>
					{position}
				</p>
			</div>
			<a
				href={twitterLink}
				target='blank'
				className='relative flex justify-center items-center gap-2 capitalize'
			>
				<span className='text-base xl:text-lg font-medium'>twitter</span>
				<ImArrowUpRight2
					size={20}
					className='absolute -right-5 text-ocean-200'
				/>
			</a>
		</div>
	)
}

export default TeamMember
