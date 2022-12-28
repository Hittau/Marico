import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Form from '../components/Form/Form'
import { auth } from '../firebase'
import useAuth from '../hooks/useAuth'

const Register = () => {
	const user = useAuth()
	const navigate = useNavigate()

	const handleRegister = (email, password, username) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				updateProfile(user, {
					displayName: username,
				})
				navigate('/')
			})
			.catch(error => {
				console.log(error)
			})
	}

	if (user) {
		return <Navigate to='/' />
	} else {
		return <Form type='register' handleSubmit={handleRegister} />
	}
}

export default Register
