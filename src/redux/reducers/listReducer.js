const initialListState = {
	list: [{ id: '1', name: 'uno' }, { id: '2', name: 'dos' }, { id: '3', name: 'tres' }, { id: '4', name: 'cuatro' }]
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
