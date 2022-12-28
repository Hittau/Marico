import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import ScrollToTop from './components/ScrollToTop'

function App() {
	return (
		<ScrollToTop>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='blog' element={<Blog />} />
					<Route path='pricing' element={<Pricing />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Notfound />} />
				</Route>
			</Routes>
		</ScrollToTop>
	)
}

export default App
