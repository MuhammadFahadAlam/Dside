import React from 'react';
import { Idea } from '../../components';
import style from './ProjectCard.module.css';

function ProjectCard() {
	return (
		<div className={style.main}>
			<div className={style.top}>
				<h1 className={style.project}>Projects</h1>
				<h2 className={style.heading}>Team Name</h2>
				<p className={style.para}>Team Hope</p>
				<h2 className={style.heading}>Team Members</h2>
				<p className={style.para}>Muhammad Fahad Alam</p>
				<p className={style.para}>Syed Umair Hasan</p>
				<p className={style.para}>Syed Saad Hasan Emad</p>
			</div>
			<Idea />
		</div>
	);
}

export default ProjectCard;
