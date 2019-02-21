import React from 'react';
import configureStore from '../redux/configureStore';
import { shallow } from 'enzyme';
import Main from './Main';
import { Provider } from 'react-redux';

it('renders a redux Provider with a store', () => {
	const store = configureStore();
	const mainWrapper = shallow(<Main store={store} />);
	expect(mainWrapper.find(Provider).length).toEqual(1);
});
