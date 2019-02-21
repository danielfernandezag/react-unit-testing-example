import listState from './listReducer';
import * as Actions from '../actions/index';

const list = [{ id: '1', name: 'uno', cost: 1200 }, { id: '2', name: 'dos', cost: 2100 }, { id: '3', name: 'tres', cost: 1100 }, { id: '4', name: 'cuatro', cost: 200 }];

describe('list reducer', () => {
	it('should return the initial state', () => {
		expect(listState(undefined, {})).toEqual({
			list
		});
	});
});

it('should handle ADD_TO_LIST', () => {
	expect(listState({ list }, Actions.addToList({ id: '5', name: 'cinco', cost: 500 }))).toEqual({ list: [...list, { id: '5', name: 'cinco', cost: 500 }] });
});

it('should handle REMOVE_FROM_LIST', () => {
	expect(listState({ list }, Actions.removeFromList(1))).toEqual({ list: [{ id: '1', name: 'uno', cost: 1200 }, { id: '3', name: 'tres', cost: 1100 }, { id: '4', name: 'cuatro', cost: 200 }] });
});
