import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDlTN6vg9Mwz5IOH2x3gjUREyF2wwutgq8',
	authDomain: 'marico-97eb5.firebaseapp.com',
	projectId: 'marico-97eb5',
	storageBucket: 'marico-97eb5.appspot.com',
	messagingSenderId: '545301830964',
	appId: '1:545301830964:web:2e936120e9afd91a77d961',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
