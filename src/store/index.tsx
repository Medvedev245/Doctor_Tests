import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './testsReducer';

export const store = configureStore({
  reducer: {
    tests: testsReducer,
  },
});

// Определение типа корневого состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
