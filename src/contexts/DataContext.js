import React, { createContext, useReducer } from 'react';
import DataReducer from './../reducers/DataReducer';

const initialData = [
	{
		id: 1,
		title: 'Visualri',
		internal: 'Sir Shahab',
		like: 0,
		comments: [],
		summary:
			'Visualri a computer vision toolkit. It will include 100 functions of opencv. All the functions would be responsible for performing different tasks on the images provides. The functions are divided into 3 categories i.e Image Processing, Computer Vision and style transfer. There is an option to upload ann image or take a picture from webcam. We can also use ipcamera for applying effect on the spot.',
		expanded: false,
		picture: '',
		edit: false,
	},
	{
		id: 2,
		title: 'Tool building for university',
		internal: 'Sir Shahab',
		like: 0,
		comments: [],
		summary: 'A tool for university courses. We have learnt many courses without using any tool and we beleive that learning would be easy if a good tool is provided for the practice purposes. We are aiming to make a new tool for helping understand the concepts of courses by appying our knowledge. We think that Hardware related courses should have tools for practice and simulation.',
		expanded: false,
		picture: '',
		edit: false,
	},
];

export const DataContext = createContext(initialData);

export const DataProvider = ({ children }) => {
	let [state, dispatch] = useReducer(DataReducer, initialData);

	function addIdea(idea) {
		dispatch({
			type: 'ADD_IDEA',
			payload: {
				title: idea.title,
				internal: idea.internal,
				like: 0,
				comments: [],
				summary: idea.summary,
				expanded: true,
				picture: '',
				edit: true,
			},
		});
	}

	function expandIdea(index) {
		dispatch({
			type: 'EXPAND_IDEA',
			payload: index,
		});
	}

	function deleteIdea(index) {
		dispatch({
			type: 'DELETE_IDEA',
			payload: index,
		});
	}

	function editIdea(para) {
		dispatch({
			type: 'EDIT_IDEA',
			act: para.act,
			payload: para.index,
		});
	}

	function editFieldValue(index, e) {
		dispatch({
			type: 'HANDLE TEXT INPUT',
			index: index,
			field: e.target.name,
			payload: e.target.value,
		});
	}

	return (
		<DataContext.Provider
			value={{
				data: state,
				addIdea,
				expandIdea,
				deleteIdea,
				editIdea,
				editFieldValue,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
