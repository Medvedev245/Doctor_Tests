// import { combineReducers, createStore } from 'redux';
// import { testsReducer } from './testsReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const rootReducer = combineReducers({
//   testsReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './testsReducer';

export const store = configureStore({
  reducer: {
    tests: testsReducer,
  },
});
