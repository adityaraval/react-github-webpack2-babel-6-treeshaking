import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise';
import tasksReducer from '../reducers/tasksReducer';
import homeReducer from '../reducers/homeReducer';

const rootReducer = combineReducers({
  tasks:tasksReducer,
  home:homeReducer
});

const store = createStore(rootReducer,applyMiddleware(reduxPromise));

export default store;
