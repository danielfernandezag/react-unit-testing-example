export const setBalance = balance => ({
	type: 'SET_BALANCE',
	balance
});

export const addToList = item => ({
	//object item
	type: 'ADD_TO_LIST',
	item
});

export const removeFromList = item => ({
	// index of item
	type: 'REMOVE_FROM_LIST',
	item
});
