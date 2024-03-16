import { combineReducers, createStore } from 'redux';
import { testsReducer } from './testsReducer';

const rootReducer = combineReducers({
  testsReducer,
});

export const store = createStore(rootReducer);
