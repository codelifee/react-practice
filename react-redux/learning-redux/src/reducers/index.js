import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    //I can use whatever name I want
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;