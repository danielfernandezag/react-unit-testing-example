import configureStore from '../configureStore';

describe('when configureStore runs', () => {
	it('return store with list and balance states', () => {
		const store = configureStore();
		expect(store.getState()).toMatchObject({
			balanceState: { balance: 0 },
			listState: { list: [] }
		});
	});
});
