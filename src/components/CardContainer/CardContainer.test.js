import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
import Card from '../Card/Card';

const mockList = [{ id: '1', name: 'one', cost: 1000 }, { id: '2', name: 'two', cost: 2000 }];
const setBalanceMock = jest.fn();
const addToListMock = jest.fn();
let wrapper = null;

beforeEach(() => {
	wrapper = shallow(<CardContainer list={mockList} balance={3000} setBalance={setBalanceMock} addToList={addToListMock} />);
});
afterEach(() => {
	wrapper.unmount();
});

describe('when first mounted', () => {
	it('renders CardContainer displaying correct data', () => {
		wrapper.instance().componentWillMount();
		expect(wrapper.find('.balance').text()).toEqual('Total cost: $ 3,000');
		expect(wrapper.find(Card).length).toEqual(2);
		expect(setBalanceMock).toHaveBeenCalled();
	});
});

describe('when adding id data', () => {
	it('changes react id state value', () => {
		wrapper.find('#id-input').simulate('change', { target: { value: '3' } });
		expect(wrapper.state('id')).toBe('3');
		wrapper.instance().handleIdChange({ target: { value: '3' } });
		expect(wrapper.state('id')).toBe('3');
	});
});

describe('when adding name data', () => {
	it('changes react name state value', () => {
		wrapper.find('#name-input').simulate('change', { target: { value: 'three' } });
		expect(wrapper.state('name')).toBe('three');
		wrapper.instance().handleNameChange({ target: { value: 'three' } });
		expect(wrapper.state('name')).toBe('three');
	});
});

describe('when adding cost data', () => {
	it('changes react cost state value', () => {
		wrapper.find('#cost-input').simulate('change', { target: { value: '3000' } });
		expect(wrapper.state('cost')).toBe('3000');
		wrapper.instance().handleIdChange({ target: { value: '3000' } });
		expect(wrapper.state('cost')).toBe('3000');
	});
});

describe('when clicking add icon with an empty field', () => {
	it("doesn't do anything", () => {
		const spyHandleAddItem = jest.spyOn(wrapper.instance(), 'handleAddItem');
		wrapper.find('#id-input').simulate('change', { target: { value: '4' } });
		wrapper.find('#cost-input').simulate('change', { target: { value: '4000' } });
		wrapper.find('.fas.fa-plus-circle').simulate('click');
		expect(spyHandleAddItem).toHaveBeenCalled();
		expect(addToListMock).not.toHaveBeenCalled();
	});
});

describe('when clicking add icon', () => {
	it('reads state id, name and cost and triggers new item action', () => {
		const spyHandleAddItem = jest.spyOn(wrapper.instance(), 'handleAddItem');
		wrapper.find('#id-input').simulate('change', { target: { value: '4' } });
		wrapper.find('#name-input').simulate('change', { target: { value: 'four' } });
		wrapper.find('#cost-input').simulate('change', { target: { value: '4000' } });
		wrapper.find('.fas.fa-plus-circle').simulate('click');
		expect(spyHandleAddItem).toHaveBeenCalled();
		expect(addToListMock.mock.calls.length).toEqual(1);
		expect(setBalanceMock).toHaveBeenCalled();
		expect(addToListMock).toBeCalledWith({ id: '4', name: 'four', cost: 4000 });
	});
});

describe('when new balance prop is injected', () => {
	it('triggers setBalance action', () => {
		wrapper.instance().componentWillReceiveProps({ list: mockList, balance: 4000, setBalance: setBalanceMock, addToList: addToListMock });
		expect(setBalanceMock).toHaveBeenCalled();
	});
});
