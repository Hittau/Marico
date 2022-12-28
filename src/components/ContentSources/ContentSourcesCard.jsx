import React from 'react'

const ContentSourcesCard = ({ name, icon: Icon, iconColor: color, desc }) => {
	return (
		<div className='flex flex-col gap-2 md:gap-3 border border-cobble-200 rounded-xl p-5 md:p-7 xl:p-9'>
			<div
				className='rounded-full flex justify-center items-center max-w-max p-3'
				style={{ background: color }}
			>
				<Icon size={35} color='white' />
			</div>
			<h6 className='text-lg md:text-xl lg:text-2xl font-semibold capitalize'>
				{name}
			</h6>
			<p className='text-base md:text-lg lg:text-xl text-cobble-200'>{desc}</p>
		</div>
	)
}

export default ContentSourcesCard
