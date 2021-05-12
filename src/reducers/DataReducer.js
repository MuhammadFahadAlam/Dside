const DataReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_IDEA':
			return [action.payload, ...state];
		case 'EXPAND_IDEA': {
			const newState = [...state];

			// Alternate
			// newState[action.payload.index].expanded = true;

			newState.forEach((val, i) => {
				if (i === action.payload.index) {
					val.expanded = true;
				} else {
					val.expanded = false;
				}
			});
			return newState;
		}
		case 'DELETE_IDEA': {
			return state.filter((val, i) => i !== action.payload.index);
		}

		case 'EDIT_IDEA': {
			const newState = [...state];

			// Alternate
			// newState[action.payload.index].edit = true;

			const bool = action.act === 'edit';

			newState.forEach((val, i) => {
				if (i === action.payload) {
					val.edit = bool;
					val.expanded = true;
				}
			});
			console.log(newState);
			return newState;
		}
		case 'HANDLE TEXT INPUT': {
			const newState = [...state];

			newState.forEach((val, i) => {
				if (i === action.index) {
					val[action.field] = action.payload;
				}
			});
			console.log(newState);
			return newState;
		}
		default:
			return state;
	}
};

export default DataReducer;
