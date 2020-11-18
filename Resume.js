import React from 'react';
import Bar from './Bar';
import react  from '../assets/icons/react.svg';
import {motion} from 'framer-motion';

const languages=	[
	{
		icon: react,
		name: 'Python',
		level: ''

	}, 
	{
		icon: react,
		name: 'Java',
		level: ''

	}, 
	{
		icon: react,
		name: 'Html',
		level: ''

	}
		]

		const tools=	[
	{
		icon: react,
		name: 'Figma',
		level: ''

	}, 
	{
		icon: react,
		name: 'Higma',
		level: ''

	}, 
	{
		icon: react,
		name: 'Jama',
		level: ''

	}
		]

const Resume=()=>{
		const resume_variant={
			initial:{
				opacity: 0
				
			},
			visible:{
				opacity: 1,
				
				transition:{
					delay:0.2, duration: 0.7,
				}
			},
			exit:{
				opacity: 0,
				transition:{
					ease:'easeInOut'
				}
			}
		}
	return(
	<motion.div className="container resume"
				variant={resume_variant}
				initial='hidden'
				animate='visible'
				exit='exit'
				>
		<div className="row">
			<div className="col-lg-6 resume-card">
			<h4 className="col-lg-6 resume-card_heading">
			Education
			</h4>
			<div className="col-lg-6 resume_body">
			
			<h5 className="col-lg-6 resume-language_title">
				computer Science Engineering
			</h5>
			<p className="resume-language_name">
					Academy of Engineering
					</p>
					<p className="resume-card_details">
					 This college is the most popular college in nepal
					 </p>

					</div>
					</div>


			<div className="col-lg-6 resume-card">
			<h4 className="col-lg-6 resume-card_heading">
				Experience</h4>
			
		<div className="col-lg-6 resume_body">
			
			<h5 className="col-lg-6 resume-language_title">
				Webdeveloper
			</h5>
			<p className="resume-language_name">
					SoftLab pvt ltd
					</p>
					<p className="resume-card_details">
					 Work experience  5 years
					 </p>
					
					</div>

					</div>
			</div>
		
		
		<div className="row">
			<div className="col-lg-6 resume-language">
			<h5 className="col-lg-6 resume-language_heading">
				languages and framework
			</h5>

			<div className="resume-language_body mt-3">
				{
						languages.map(language =>
							<Bar value={language}/>
							)
				}

			</div>
			</div>
				
	


			
			<div className="col-lg-6 resume-language">
			<h5 className="col-lg-6 resume-language_heading">
				Tools and Software
			</h5>
			<div className="resume-language_body mt-3">
				{
						tools.map(tool =>
							<Bar value={tool}/>
							)
				}

			</div>
		</div>

	</div>
	
	</motion.div>
	)
}
export default Resume;