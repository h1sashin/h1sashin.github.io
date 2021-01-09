import { combineReducers } from 'redux';
import appsReducer from 'reducers/appsReducer';
import themeReducer from 'reducers/themeReducer';
import notificationsReducer from 'reducers/notificationsReducer';

export default combineReducers({
    appsReducer,
    themeReducer,
    notificationsReducer
});