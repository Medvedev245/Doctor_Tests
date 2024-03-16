import { combineReducers, createStore } from 'redux';
import { testsReducer } from './testsReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  testsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
