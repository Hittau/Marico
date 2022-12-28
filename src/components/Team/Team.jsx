import React from 'react'
import Suptitle from '../Suptitle'
import Title from '../Title'
import TeamMembers from './TeamMembers'

const Team = () => {
	return (
		<section>
			<div className='about-container flex flex-col justify-center gap-14 items-center text-center pt-[16vh]'>
				<div>
					<Suptitle>our team</Suptitle>
					<Title>We love creators</Title>
				</div>
				<TeamMembers />
			</div>
		</section>
	)
}

export default Team
