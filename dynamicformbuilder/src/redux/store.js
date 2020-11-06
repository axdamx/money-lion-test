import {createStore} from 'redux';
import {combineReducers} from 'redux';
import formReducer from './form';

const rootReducer = combineReducers({
  formReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
