import React from 'react'
import PlansCardAddition from './PlansCardAddition'
import PlansCardButton from './PlansCardButton'
import PlansCardDesc from './PlansCardDesc'
import PlansCardName from './PlansCardName'
import PlansCardOptions from './PlansCardOptions'
import PlansCardEmailsCount from './PlansCardEmailsCount'
import PlansCardMonthlyPrice from './PlansCardMonthlyPrice'
import PlansCardPrice from './PlansCardPrice'

const PlansCard = ({
	name,
	desc,
	price,
	monthlyPrice,
	emailsCount,
	addition,
	optionsTitle,
	options,
	highlighted,
}) => {
	return (
		<>
			<div className='flex-auto'>
				<div className='pb-[14px]'>
					<PlansCardName name={name} />
					<PlansCardDesc desc={desc} highlighted={highlighted} />
				</div>
				<div>
					<PlansCardPrice price={price} highlighted={highlighted} />
					<PlansCardMonthlyPrice
						monthlyPrice={monthlyPrice}
						highlighted={highlighted}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
				<div>
					<h6 className='text-base lg:text-xl xl:text-2xl font-bold pb-2'>
						Collect Unlimited subscribers
					</h6>
					<PlansCardEmailsCount emailsCount={emailsCount} />
				</div>
				<PlansCardAddition addition={addition} highlighted={highlighted} />
				<div>
					<h6 className='text-base lg:text-xl xl:text-2xl font-bold pb-3 md:pb-5 lg:pb-7'>
						{optionsTitle}
					</h6>
					<PlansCardOptions options={options} />
				</div>
			</div>
			<PlansCardButton className='py-4' highlighted={highlighted}>
				Start {price === 'free' ? 'For Free' : 'Free 14-day Trial'}
			</PlansCardButton>
		</>
	)
}

export default PlansCard
