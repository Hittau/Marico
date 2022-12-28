import React from 'react'
import { teamMembers } from '../../utils/consts'
import TeamMember from './TeamMember'

const TeamMembers = () => {
	return (
		<div className='flex justify-center sm:justify-between gap-10 w-full max-w-4xl flex-wrap'>
			{teamMembers.map(({ img, name, position, twitterLink }) => (
				<TeamMember
					img={img}
					name={name}
					position={position}
					twitterLink={twitterLink}
				/>
			))}
		</div>
	)
}

export default TeamMembers
