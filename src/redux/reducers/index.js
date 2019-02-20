import { combineReducers } from 'redux';
import balanceState from './balanceReducer';
import listState from './listReducer';

export default combineReducers({
	balanceState,
	listState
});
