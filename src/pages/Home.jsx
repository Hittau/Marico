import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import Feedback from '../components/Feedback/Feedback'
import FirstStep from '../components/FirstStep/FirstStep'
import Hero from '../components/Hero/Hero'
import SecondStep from '../components/SecondStep/SecondStep'
import ThirdStep from '../components/ThirdStep/ThirdStep'
import Achievement from '../components/Achievement/Achievement'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<>
			<Hero />
			<Benefits />
			<FirstStep />
			<SecondStep />
			<ThirdStep />
			<Feedback />
			<Achievement />
			<GetStarted />
			<Footer />
		</>
	)
}

export default Home
