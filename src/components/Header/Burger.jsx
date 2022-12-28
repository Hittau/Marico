import React from 'react'

const Burger = ({ isOpen, setIsOpen }) => {
	const handleClick = () => {
		setIsOpen(!isOpen)
		if (isOpen) {
			document.body.style.overflowY = 'scroll'
		} else {
			document.body.style.overflowY = 'hidden'
		}
	}

	return (
		<div
			onClick={handleClick}
			className='absolute right-0 block md:hidden p-3 cursor-pointer z-20'
		>
			<div className='relative w-9 h-6'>
				<div
					className={`absolute ${
						isOpen ? 'top-1/2 rotate-45' : 'top-0'
					} w-full h-[2px] bg-white transition-all duration-300`}
				></div>
				<div
					className={`absolute ${
						isOpen ? 'scale-0' : ''
					} top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-all duration-300`}
				></div>
				<div
					className={`absolute ${
						isOpen ? 'bottom-[calc(50%_-_2px)] -rotate-45' : 'bottom-0'
					} w-full h-[2px] bg-white transition-all duration-300`}
				></div>
			</div>
		</div>
	)
}

export default Burger
