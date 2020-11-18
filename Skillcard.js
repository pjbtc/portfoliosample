import React from 'react';
import globe from '../assets/icons/globe.svg';

const Skillcard=({skill: { icon, title,about }})=>
	
		<div>
			<div className="col-lg-6">
				<div className="skillcard">
						  	<img src={icon} style={{width:"95px", height:"15px"}} alt="icon" className="skill-card_icon"/>
						  	<div className="skill-card-body">
						  		<h6 className="skill-card_title">{title}</h6>
						  		<p className="skill-card_content">{about}</p>

						  	</div>
						  	</div>
						  	</div>
		</div>

	

export default Skillcard;