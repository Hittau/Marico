import React from 'react'
import Button from '../Button'
import Title from '../Title'
import List from '../List/List'

const Desc = ({ label, title, highlighted, list, className }) => {
	return (
		<div
			className={`${
				className ? className : ''
			} flex flex-col items-center md:items-start`}
		>
			<span className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium capitalize'>
				{label}
			</span>
			<Title
				capitalize={true}
				className='pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-20'
			>
				{title}
				<span className='text-ocean-200'>{highlighted}</span>
			</Title>
			<List content={list} />
			<div className='flex flex-col justify-center md:justify-start sm:flex-row gap-6 w-full'>
				<Button
					to='/pricing'
					variant='contained'
					className='py-4 px-[22px] sm:py-[18px] rounded-xl'
				>
					get started now
				</Button>
				<Button
					to='/blog'
					variant='outlined'
					className='py-4 px-9 sm:py-[18px] rounded-xl'
				>
					view a demo
				</Button>
			</div>
		</div>
	)
}

export default Desc
