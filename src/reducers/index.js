import { combineReducers } from 'redux';
import appsReducer from 'reducers/appsReducer';
import themeReducer from 'reducers/themeReducer';
import notificationReducer from 'reducers/notificationReducer';

export default combineReducers({
    appsReducer,
    themeReducer,
    notificationReducer
});