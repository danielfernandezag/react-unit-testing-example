import listState from './listReducer';
import * as Actions from '../actions/index';

const mockList = [{ id: '1', name: 'one', cost: 100 }, { id: '2', name: 'two', cost: 200 }];

describe('list reducer', () => {
	it('should return the initial state', () => {
		expect(listState(undefined, {})).toEqual({
			list: []
		});
	});
});

it('should handle ADD_TO_LIST', () => {
	expect(listState({ list: mockList }, Actions.addToList({ id: '3', name: 'three', cost: 300 }))).toEqual({ list: [...mockList, { id: '3', name: 'three', cost: 300 }] });
});

it('should handle REMOVE_FROM_LIST', () => {
	expect(listState({ list: mockList }, Actions.removeFromList(1))).toEqual({ list: [{ id: '1', name: 'one', cost: 100 }] });
});
