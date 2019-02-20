import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import './index.css';
import Main from './components/Main';

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById('root'));
