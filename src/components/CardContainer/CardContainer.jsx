import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList, removeFromList, setBalance } from '../../redux/actions/index';
import Card from '../Card/Card';
import './CardContainer.css';

export class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			name: '',
			cost: 0
		};
	}

	handleIdChange = e => this.setState({ id: e.target.value });
	handleCostChange = e => this.setState({ cost: e.target.value });
	handleNameChange = e => this.setState({ name: e.target.value });
	handleAddItem = () => {
		const { id, cost, name } = this.state;
		if (id > 0 && cost !== 0 && name !== '') {
			this.props.addToList({ id, name, cost: parseFloat(cost) });
		}
	};

	componentWillMount() {
		const sum = this.props.list.reduce((sum, current) => sum + current.cost, 0);
		this.props.setBalance(sum);
	}

	componentWillReceiveProps(nextProps) {
		const sum = nextProps.list.reduce((sum, current) => sum + current.cost, 0);
		this.props.setBalance(sum);
	}

	render() {
		const { list, balance } = this.props;
		return (
			<div className='card-container'>
				<div className='balance'>{`Total cost: $ ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</div>
				<div className='add-item-form'>
					<input id='id-input' type='number' placeholder='id' min='0' onChange={this.handleIdChange} />
					<input id='cost-input' type='number' placeholder='cost' min='0' onChange={this.handleCostChange} />
					<input id='name-input' type='text' placeholder='name' maxLength='20' onChange={this.handleNameChange} />
					<i className='fas fa-plus-circle' onClick={this.handleAddItem} />
				</div>
				<div className='card-list'>
					{list.map((item, index) => (
						<Card key={item.id} id={item.id} name={item.name} cost={item.cost} index={index} remove={this.props.removeFromList} />
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
	removeFromList,
	setBalance
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardContainer);
