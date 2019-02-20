const initialBalanceState = {
	balance: 0
};

const balanceState = (state = initialBalanceState, action) => {
	switch (action.type) {
		case 'SET_BALANCE':
			return {
				...state,
				balance: action.balance
			};
		default:
			return state;
	}
};

export default balanceState;
