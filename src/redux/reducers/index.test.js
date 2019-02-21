import configureStore from '../configureStore';

describe('when configureStore runs', () => {
	it('return store with list and balance states', () => {
		const store = configureStore();
		expect(store.getState()).toMatchObject({
			balanceState: { balance: 0 },
			listState: { list: [{ cost: 1200, id: '1', name: 'uno' }, { cost: 2100, id: '2', name: 'dos' }, { cost: 1100, id: '3', name: 'tres' }, { cost: 200, id: '4', name: 'cuatro' }] }
		});
	});
});
