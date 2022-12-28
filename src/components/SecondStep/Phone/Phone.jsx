import React from 'react'
import { HiLockClosed } from 'react-icons/hi'

const Phone = () => {
	return (
		<div className='bg-black h-64 lg:h-72 xl:h-[338px] rounded-tl-[124px] pt-10 pl-10 border-[#afaac1] border-[12px] border-r-0 border-b-0 w-[95%] self-end'>
			<div className='relative flex flex-col bg-[#1e1e1e] h-full rounded-tl-[84px] p-4 pr-0 xl:p-9 xl:pr-0'>
				<div className='absolute right-0 -top-7 flex justify-center w-2/3 bg-black h-20 rounded-full rounded-tr-none rounded-br-none'>
					<div className='flex justify-center items-center gap-4 md:gap-6 w-full absolute left-1/2 -translate-x-1/3 top-1/2 -translate-y-1/2'>
						<div className='w-1/2 sm:w-1/4 h-[18px] bg-[#2b2b29] rounded-full'></div>
						<div className='p-2 w-8 h-8 bg-[#171717] border-2 border-[#2b2b29] rounded-full'>
							<div className='w-full h-full bg-[#232a5e] rounded-full'></div>
						</div>
					</div>
				</div>
				<time
					dateTime='9:41'
					className='flex-auto text-xl sm:text-3xl font-semibold ml-[10%]'
				>
					9:41
				</time>
				<div className='relative flex justify-between items-center gap-5 w-full bg-[#323234] self-end rounded-xl rounded-tr-none rounded-br-none pl-4 sm:pl-9 py-3 sm:py-[14px] overflow-hidden'>
					<span className='text-lg sm:text-2xl'>AA</span>
					<div className='absolute ml-24 left-auto flex items-center gap-2 sm:gap-6 text-xl sm:text-3xl xl:text-4xl text-[#84e575] font-light lowercase'>
						<HiLockClosed />
						<span className=''>hittaudev.com</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Phone
