import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

const useAuth = () => {
	const [user, setUser] = useState()

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			if (currentUser) {
				setUser(currentUser)
			} else {
				setUser(null)
			}
		})
	}, [])

	return user
}

export default useAuth
