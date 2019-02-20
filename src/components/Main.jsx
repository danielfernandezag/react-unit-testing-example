import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CardContainer from './CardContainer/CardContainer';

export class Main extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<React.Fragment>
					<CardContainer />
				</React.Fragment>
			</Provider>
		);
	}
}

export default Main;
