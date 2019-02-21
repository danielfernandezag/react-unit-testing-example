import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import * as Actions from './index';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

beforeEach(() => {
	store.clearActions();
});

describe('when setBalance triggered', () => {
	it('returns setBalance action object', () => {
		const expectedAction = [{ type: 'SET_BALANCE', balance: 1000 }];
		store.dispatch(Actions.setBalance(1000));
		expect(store.getActions()).toEqual(expectedAction);
	});
});

describe('when removeFromList triggered', () => {
	it('returns removeFromList action object', () => {
		const expectedAction = [{ type: 'REMOVE_FROM_LIST', item: 0 }];
		store.dispatch(Actions.removeFromList(0));
		expect(store.getActions()).toEqual(expectedAction);
	});
});

describe('when addToList triggered', () => {
	it('returns addToList action object', () => {
		const expectedAction = [{ type: 'ADD_TO_LIST', item: { id: '10', name: 'test', cost: 200 } }];
		store.dispatch(Actions.addToList({ id: '10', name: 'test', cost: 200 }));
		expect(store.getActions()).toEqual(expectedAction);
	});
});
