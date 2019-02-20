const initialListState = {
	list: [{ id: '1', name: 'uno', cost: 1200 }, { id: '2', name: 'dos', cost: 2100 }, { id: '3', name: 'tres', cost: 1100 }, { id: '4', name: 'cuatro', cost: 200 }]
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
