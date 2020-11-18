import React from 'react';
import globe from '../assets/icons/globe.svg';
import Skillcard from './Skillcard';
import {motion} from 'framer-motion';

const skills=[	
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	{
			icon: globe,
			title: "er pjbtc",
			about: "lorem epsum"

	},
	]

const About=()=>{

	const about_variant={
			initial:{
				opacity: 0
				
			},
			visible:{
				opacity: 1,
				
				transition:{
					delay:0.2, duration: 0.7,
				}
			},
		}
	return(
		<motion.div className="About"
				variant={about_variant}
				initial='hidden'
				animate='visible'
				exit='exit'
				>
			<h6 className="about_intro">
			About myself , I m a proficient webdeveloper.

			</h6>
			<div className="container about_container">
				<h6 className="about_heading">What I offer </h6>
				<div className="row">
				{
					skills.map(skill=>
						<Skillcard skill={skill}/>
						
						  	)

				}

				</div>
			</div>
	
	</motion.div>
	);
};
export default About;