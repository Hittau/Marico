import React, { useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import Button from '../Button'

const FormFields = ({ type, handleSubmit }) => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isVisible, setIsVisible] = useState(false)
	const passwordFieldRef = useRef(null)

	const handleEyeClick = () => {
		const passwordField = passwordFieldRef.current
		setIsVisible(!isVisible)

		if (isVisible) {
			passwordField.type = 'password'
		} else {
			passwordField.type = 'text'
		}
	}

	return (
		<form className='flex flex-col md:flex-row md:flex-wrap gap-x-20 md:gap-x-24 xl:gap-x-36 gap-y-6 sm:gap-y-10 md:gap-y-14 justify-center xl:max-w-6xl mx-auto'>
			{type === 'register' && (
				<div className='relative basis-1/3 border-b border-b-cobble-200 pr-12'>
					<input
						type='text'
						placeholder='Username'
						className={`w-full bg-transparent outline-none text-white text-lg py-2`}
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<div className='absolute text-cobble-200 right-0 top-1/2 -translate-y-1/2 p-3 pointer-events-none'>
						<BiUser size={24} />
					</div>
				</div>
			)}
			<div
				className={`relative ${
					type === 'register' ? 'basis-1/3' : 'basis-2/5'
				} border-b border-b-cobble-200 pr-12`}
			>
				<input
					type='email'
					placeholder='Email Address'
					className={`w-full bg-transparent outline-none text-white text-lg py-2`}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<span className='absolute text-2xl text-cobble-200 hover:text-white right-0 top-1/2 -translate-y-1/2 p-3 pointer-events-none'>
					@
				</span>
			</div>
			<div
				className={`relative ${
					type === 'register' ? 'basis-1/3' : 'basis-2/5'
				} border-b border-b-cobble-200 pr-12`}
			>
				<input
					ref={passwordFieldRef}
					type='password'
					placeholder='Password'
					className={`w-full bg-transparent outline-none text-white text-lg py-2`}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<div
					onClick={handleEyeClick}
					className='absolute right-0 top-1/2 -translate-y-1/2 p-3 text-cobble-200 hover:text-white cursor-pointer select-none transition-colors duration-300'
				>
					{isVisible ? (
						<AiOutlineEyeInvisible size={24} />
					) : (
						<AiOutlineEye size={24} />
					)}
				</div>
			</div>
			<Button
				onClick={() => handleSubmit(email, password, username)}
				type='submit'
				variant='contained'
				className='px-7 py-3 basis-1/3'
			>
				{type === 'register' ? 'sign up' : 'log in'}
			</Button>
		</form>
	)
}

export default FormFields
