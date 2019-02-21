import React, { Component } from 'react';
import './Card.css';
export class Card extends Component {
	render() {
		const { id, name, cost, index } = this.props;
		return (
			<div className='card-item'>
				<div className='item-id'>{`Id: ${id}`}</div>
				<div className='item-name'>{`Name: ${name}`}</div>
				<div className='item-cost'>{`Cost: $ ${cost}`}</div>
				<div className='item-icon'>
					<i className='fas fa-trash' onClick={() => this.props.remove(index)} />
				</div>
			</div>
		);
	}
}

export default Card;
