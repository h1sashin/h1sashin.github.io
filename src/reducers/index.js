import { combineReducers } from 'redux';
import appsReducer from 'reducers/appsReducer';
import themeReducer from 'reducers/themeReducer';

export default combineReducers({
    appsReducer,
    themeReducer
});