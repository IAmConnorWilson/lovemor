import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import shoppingCart from './modules/shoppingCart';
import inventory from './modules/inventory';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    shoppingCart,
    inventory
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;