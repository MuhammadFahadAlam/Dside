import React, { useContext } from 'react';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import style from './Idea.module.css';
import image from './../../assets/picture.jpg';
import { DataContext } from '../../contexts/DataContext';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Idea() {
	const {
		data,
		addIdea,
		expandIdea,
		deleteIdea,
		editIdea,
		editFieldValue,
	} = useContext(DataContext);

	let ideas = data.map((idea, index) => {
		return (
			<div className={style.main} key={index}>
				<div className={style.content}>
					<div className={style.left}>
						<h1 className={style.title}>
							<small>Title</small>
							<br />
							{idea.edit ? (
								<input
									type='text'
									name='title'
									value={idea.title}
									id='title'
									onChange={(e) => editFieldValue(index, e)}
								/>
							) : (
								<span>{idea.title}</span>
							)}
						</h1>
						<p className={style.internal}>
							<b>Internal</b>
							<br />
							{idea.edit ? (
								<input
									type='text'
									name='internal'
									value={idea.internal}
									id='internal'
									onChange={(e) => editFieldValue(index, e)}
								/>
							) : (
								idea.internal
							)}
						</p>
					</div>
					<div className={style.right}>
						<img className={style.image} src={image} alt='' />
						<div className={style.options}>
							{idea.edit ? (
								<button
									className={style.optionButton}
									onClick={() =>
										editIdea({
											index: index,
											act: 'done',
										})
									}
								>
									<DoneIcon fontSize='small' />
								</button>
							) : (
								<button
									className={style.optionButton}
									onClick={() =>
										editIdea({
											index: index,
											act: 'edit',
										})
									}
								>
									<EditIcon fontSize='small' />
								</button>
							)}
							<button
								className={style.optionButton}
								onClick={() => deleteIdea({ index: index })}
							>
								<DeleteOutlineIcon fontSize='small' />
							</button>
						</div>
					</div>
				</div>
				<div
					className={style.expand}
					onClick={() => expandIdea({ index: index })}
				>
					<ExpandMoreRoundedIcon />
					<hr />
					{idea.expanded ? (
						<div>
							<h1>
								<small>Summary</small>
							</h1>
							{idea.edit ? (
								<textarea
									name='summary'
									value={idea.summary}
									id='summary'
									onChange={(e) => editFieldValue(index, e)}
								/>
							) : (
								<p className={style.summaryContent}>
									{idea.summary}
								</p>
							)}
						</div>
					) : null}
				</div>
			</div>
		);
	});
	return (
		<div className={style.idea}>
			<h1 className={style.heading}>Ideas</h1>
			<button
				className={style.addButton}
				onClick={() =>
					addIdea({
						title: 'Your Title Here',
						internal: 'Your Internal Here',
						summary: 'Write Summary',
					})
				}
			>
				Add Idea
				<br />
				<AddCircleIcon fontSize='large' />
			</button>
			<hr />
			<br />
			<div className={style.ul}>{ideas}</div>
		</div>
	);
}

export default Idea;
