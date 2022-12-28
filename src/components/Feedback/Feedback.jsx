import React from 'react'
import Title from '../Title'
import Feedback1 from '../../assets/feedback-1.png'
import Feedback2 from '../../assets/feedback-2.png'
import Feedback3 from '../../assets/feedback-3.png'
import Feedback4 from '../../assets/feedback-4.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Feedback = () => {
	return (
		<section>
			<div className='flex flex-col items-center px-6 lg:px-12 py-24 sm:py-28 md:py-32 lg:py-36 xl:py-44 max-w-lg mx-auto md:max-w-none'>
				<Title capitalize={true} className='pb-[52px]'>
					exports agree
				</Title>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					loop={true}
					slidesPerView={1}
					slidesPerGroup={1}
					breakpoints={{
						768: {
							slidesPerView: 2,
							slidesPerGroup: 2,
						},
						1024: {
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
						1280: {
							slidesPerView: 4,
							slidesPerGroup: 4,
						},
					}}
				>
					<SwiperSlide className='opacity-50'>
						<img src={Feedback1} alt='img' />
					</SwiperSlide>
					<SwiperSlide className='opacity-50'>
						<img src={Feedback2} alt='img' />
					</SwiperSlide>
					<SwiperSlide className='opacity-50'>
						<img src={Feedback3} alt='img' />
					</SwiperSlide>
					<SwiperSlide className='opacity-50'>
						<img src={Feedback4} alt='img' />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Feedback
