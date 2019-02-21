import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

const mockRemove = jest.fn(); //mimicks parent remove function
const wrapper = shallow(<Card id='100' name='hello' cost={100} index={1} remove={mockRemove} />);

it("renders a Card component and it's remove action", () => {
	expect(wrapper.find('.card-item')).toBeTruthy();
	expect(wrapper.find('.fas.fa-trash')).toBeTruthy();
	expect(wrapper.find('.item-id').text()).toEqual('Id: 100');
	expect(wrapper.find('.item-name').text()).toEqual('Name: hello');
	expect(wrapper.find('.item-cost').text()).toEqual('Cost: $ 100');
});

describe('when clicking remove icon', () => {
	it("it calls remove action with it's own index", () => {
		wrapper.find('.fas.fa-trash').simulate('click');
		expect(mockRemove).toBeCalledWith(1);
	});
});
