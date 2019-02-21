import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../src/redux/configureStore';
import Main from './components/Main';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('renders Main', () => {
	const store = configureStore();
	const div = document.createElement('div');
	ReactDOM.render(<Main store={store} />, div);
	global.document.getElementById = id => id === 'root' && div;

	expect(ReactDOM.render).toBeCalledWith(<Main store={store} />, div);
});
