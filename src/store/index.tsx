import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './testsReducer';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    tests: testsReducer,
    user: userReducer,
  },
});

// Определение типа корневого состояния
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
