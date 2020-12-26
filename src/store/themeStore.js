import { createStore } from 'redux';
import themeReducer from 'reducers/themeReducer';

const themeStore = createStore(themeReducer);

export default themeStore;