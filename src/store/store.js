import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxPromise from 'redux-promise';
import tasksReducer from '../reducers/tasksReducer';
import homeReducer from '../reducers/homeReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  tasks:tasksReducer,
  home:homeReducer
});

const store = createStore(rootReducer,applyMiddleware(reduxPromise,logger));

export default store;
