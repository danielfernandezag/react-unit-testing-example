const initialListState = {
	list: []
};

const listState = (state = initialListState, action) => {
	switch (action.type) {
		case 'ADD_TO_LIST':
			return {
				...state,
				list: [...state.list, action.item]
			};
		case 'REMOVE_FROM_LIST':
			return {
				...state,
				list: [...state.list.slice(0, action.item), ...state.list.slice(action.item + 1)]
			};
		default:
			return state;
	}
};

export default listState;
