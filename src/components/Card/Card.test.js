import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';

it('rendersb card', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Card id='100' name='cien' cost={100} index={1} />, div);
	expect(div.children[0].textContent).toEqual('Id: 100Name: cienCost: $ 100');
	ReactDOM.unmountComponentAtNode(div);
});
