import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { plans } from '../../utils/consts'
import 'swiper/css'
import PlansCard from './PlansCard'

const PlansCards = () => {
	return (
		<Swiper
			spaceBetween={15}
			slidesPerView={1.1}
			breakpoints={{
				425: {
					slidesPerView: 1.2,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 25,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 45,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 75,
				},
			}}
		>
			{plans.map(
				({
					name,
					desc,
					price,
					monthlyPrice,
					emailsCount,
					addition,
					optionsTitle,
					options,
					highlighted,
				}) => (
					<SwiperSlide
						key={name}
						className={`flex flex-col h-full ${
							highlighted
								? 'bg-[#3c82f4!important] border-ocean-100'
								: 'bg-[#131313!important] border-cobble-200'
						} border rounded-xl p-9 default-align gap-8 sm:gap-10`}
					>
						<PlansCard
							name={name}
							desc={desc}
							price={price}
							monthlyPrice={monthlyPrice}
							emailsCount={emailsCount}
							addition={addition}
							optionsTitle={optionsTitle}
							options={options}
							highlighted={highlighted}
						/>
					</SwiperSlide>
				)
			)}
		</Swiper>
	)
}

export default PlansCards
