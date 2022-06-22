import {combineReducers} from 'redux'
import shopListReducer from './firstreducer';

const rootReducer = combineReducers({
    shopList:shopListReducer
});

export default rootReducer;