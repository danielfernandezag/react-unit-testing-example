import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import ShallowRenderer from '';
import { CardContainer } from './CardContainer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const list = [{ id: '1', name: 'uno' }, { id: '2', name: 'dos' }];
	ReactDOM.render(<CardContainer list={list} balance={1000} />, div);
	expect(div.innerHTML).toContain('Balance: $ 1,000');
	expect(div.children[0].children[2].children.length).toEqual(2);
	expect(div.children[0].innerHTML).toContain('<Card />');
	expect(div.children[0].children[2].children[0].textContent).toContain('Id: 1Name: uno');

	expect(div.children[0].children[2].children[1].textContent).toContain('Id: 2Name: dos');

	ReactDOM.unmountComponentAtNode(div);
});
