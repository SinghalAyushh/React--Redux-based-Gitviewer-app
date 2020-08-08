import {createStore ,applyMiddleware} from 'redux';
import asyncreduce from './reducers';
import thunk from 'redux-thunk'

const store = createStore(asyncreduce,applyMiddleware(thunk));

export default store;