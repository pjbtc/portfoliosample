import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import data_projects from './data_projects';
import {motion} from 'framer-motion';

const Projects=()=>{
	const[projects, setProjects]= useState(data_projects)

	const handleFilterCategory = (name)=>{
		const new_array= data_projects.filter(project=>project.category.includes(name))
		setProjects(new_array)
	}
			const project_variant={
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
	   <motion.div className="container projects"
	   			variant={project_variant}
				initial='hidden'
				animate='visible'
				exit='exit'
				>
		<div className="projects_navbar">
			<div onClick={()=>setProjects(data_projects)}>All</div>
			<div onClick={()=>handleFilterCategory('react.js')}>react</div>
			<div onClick={()=>handleFilterCategory('node.js')}>node</div>
			<div onClick={()=>handleFilterCategory('mongodB')}>mongodB</div>
			<div onClick={()=>handleFilterCategory('vanilla')}>Vanilla</div>
		</div>
		<div className="row">
		{
			projects.map(project=>
				<ProjectCard key={project.name} project={project}/>
				)
		}
		</div>
	
	 </motion.div>
	)
}
export default Projects;