import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Form from '../components/Form/Form'
import { auth } from '../firebase'
import useAuth from '../hooks/useAuth'

const Login = () => {
	const user = useAuth()
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				navigate('/')
			})
			.catch(error => {
				console.log(error)
			})
	}

	if (user) {
		return <Navigate to='/' />
	} else {
		return <Form type='login' handleSubmit={handleLogin} />
	}
}

export default Login
