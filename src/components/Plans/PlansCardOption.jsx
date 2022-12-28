import React from 'react'
import { HiOutlineCheck } from 'react-icons/hi'

const PlansCardOption = ({ option }) => {
	return (
		<li className='flex gap-1'>
			<HiOutlineCheck size={24} className='mt-[2px]' />
			<span className='text-sm md:text-base lg:text-lg xl:text-xl'>
				{option}
			</span>
		</li>
	)
}

export default PlansCardOption
