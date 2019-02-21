import balanceState from './balanceReducer';
import * as Actions from '../actions/index';

describe('balance reducer', () => {
	it('should return the initial state', () => {
		expect(balanceState(undefined, {})).toEqual({
			balance: 0
		});
	});
});

it('should handle SET_BALANCE', () => {
	expect(balanceState({ balance: 1000 }, Actions.setBalance(2000))).toEqual({ balance: 2000 });
});
