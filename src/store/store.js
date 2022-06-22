import thunk from "redux-thunk" 
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index';

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;

