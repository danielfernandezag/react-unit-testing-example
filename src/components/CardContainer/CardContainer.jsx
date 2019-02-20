import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList, removeFromList } from '../../redux/actions/index';
import Card from '../Card/Card';
import './CardContainer.css';

export class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: null
		};
	}

	handleIdChange = e => this.setState({ id: e.target.value });
	handleNameChange = e => this.setState({ name: e.target.value });
	handleAddItem = () => {
		this.props.addToList({
			id: this.state.id,
			name: this.state.name
		});
	};

	render() {
		const { list, balance } = this.props;
		return (
			<div className='card-container'>
				<div className='balance'>{`Balance: $ ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</div>
				<div className='add-item-form'>
					<input id='id-input' type='number' min='0' onChange={this.handleIdChange} />
					<input id='name-input' type='text' placeholder='name' maxLength='20' onChange={this.handleNameChange} />
					<i className='fas fa-plus-circle' onClick={this.handleAddItem} />
				</div>
				<div className='card-list'>
					{list.map((item, index) => (
						<Card key={item.id} id={item.id} name={item.name} index={index} remove={this.props.removeFromList} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	list: state.listState.list,
	balance: state.balanceState.balance
});

const mapDispatchToProps = {
	addToList,
	removeFromList
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardContainer);
