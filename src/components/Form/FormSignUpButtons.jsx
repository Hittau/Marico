import React from 'react'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaFacebook } from 'react-icons/fa'
import FormSignUpButton from './FormSignUpButton'

const FormSignUpButtons = ({ type }) => {
	const provider = new GoogleAuthProvider()

	const handleGoogleSignIn = () => {
		signInWithRedirect(auth, provider)
	}
	const handleAppleSignIn = () => {
		alert(
			"I don't have an apple developer account to implement this functionality [˚ ˃̣̣̥⌓˂̣̣̥]"
		)
	}
	const handleFacebookSignIn = () => {
		alert("I'm too lazy to implement this")
	}

	const signUpButtons = [
		{
			name: 'Google',
			icon: FcGoogle,
			handleClick: handleGoogleSignIn,
		},
		{
			name: 'Apple',
			icon: FaApple,
			handleClick: handleAppleSignIn,
		},
		{
			name: 'Facebook',
			icon: FaFacebook,
			handleClick: handleFacebookSignIn,
			iconColor: '#4267b2',
		},
	]

	return (
		<div className='flex gap-4 md:gap-8 lg:gap-14 xl:gap-20 max-w-6xl mx-auto pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16 lg:whitespace-nowrap'>
			{signUpButtons.map(({ name, icon, handleClick, iconColor }) => {
				return (
					<FormSignUpButton
						key={name}
						name={name}
						icon={icon}
						handleClick={handleClick}
						type={type}
						iconColor={iconColor}
					/>
				)
			})}
		</div>
	)
}

export default FormSignUpButtons
