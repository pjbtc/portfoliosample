import React from 'react';
import facebook from './assets/icons/facebook.svg';
import instagram from './assets/icons/instagram.svg';
import github from './assets/icons/github.svg';
import tie from './assets/icons/tie.svg';
import dv2020 from './assets/icons/dv2020.jpg';
import pin from './assets/icons/pin.svg';
import resume from './assets/Pujitcv.pdf';
import { motion } from 'framer-motion'

const Sidebar=()=>{

	const handleEmailme=()=>{
		window.open("mailto:codepjbhattachan@gmail.com")
	}
		const sidebar_variant={
			initial:{
				x:'-20vw'
				
			},
			visible:{
				x:0,
				
				transition:{
					delay:0.1, duration: 0.7, type:'spring'
				}
			}
		}
	return(
		<motion.div className="sidebar"
				variant={sidebar_variant}
				initial='hidden'
				animate='visible'
				>
		<img src={dv2020} style={{width:"120px" ,height:"100px" ,borderRadius:"50px",objectFit:"contain"}}alt="avatar" className="sidebar_avatar"/>
		<div className="sidebar_name"> Pujit<span> Bhattachan </span></div>
		<div className="sidebar_item sidebar_title"> Web Developer</div>
		<a href={resume} download="Pujitcv.pdf">
			<div className="sidebar_item sidebar_resume">
					<img src={tie} style={{width:"20px", height:"20px"}}alt="resume" className="siebar_icon" />Download resume
					</div>
		</a>
		<figure className="sidebar_social-icons my-2">
			<a href=" "><img src={facebook} style={{width:"20px", height:"20px"}}alt="facebook" className="sidebar_icon mr-3"/></a>
				<a href=" "><img src={instagram} style={{width:"20px", height:"20px"}}alt="instagram" className="sidebar_icon"/></a>
		</figure>
		
		<div className="sidebar_contact">
			<div className="sidebar_item sidebar_github">
				<a href=""><img src={github} style={{width:"20px", height:"20px"}} alt="github" className="sidebar_icon mr-3"/>github</a>
				</div>
				<div className="sidebar_location">
					<img src={pin} alt="location" className="sidebar_icon"/>
					Pokhara, Nepal
				</div>
				<div className="sidebar_item">code.pjbhattachan@gmail.com</div>
				<div className="sidebar_item">0892035122</div>	
				</div>
				<div className="sidebar_item sidebar_email" onClick={handleEmailme}>Email me</div>
		</motion.div>			
 
	)
}
export default Sidebar;