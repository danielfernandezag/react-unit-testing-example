import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card id='100' name='cien' index={1} />, div);
	expect(div.innerHTML).toContain('Id: 100');
	ReactDOM.unmountComponentAtNode(div);
});
