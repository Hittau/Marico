import React from 'react'

const SignUpButton = ({ className, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className={`${className} flex flex-row justify-center items-center basis-1/3 gap-2 lg:gap-5 px-3 md:px-5 py-3 lg:py-5 border-none sm:border-solid border border-white rounded-xl text-sm lg:text-xl hover:sm:bg-white hover:sm:text-black transition-colors duration-300`}
		>
			{children}
		</button>
	)
}

export default SignUpButton
