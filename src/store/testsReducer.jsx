// const defaultState = {
//   selectedOption1: 'Klener',
//   selectedOption2: 10,
//   questions: [],
//   rightAnswers: [],
// };

// const ADD_OPTIONS = 'ADD_OPTIONS';
// const ADD_RIGHTQUESTIONS = 'ADD_RIGHTQUESTIONS';

// export const testsReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADD_OPTIONS:
//       return {
//         ...state,
//         selectedOption1: action.payload.selectedOption1,
//         selectedOption2: action.payload.selectedOption2,
//         questions: action.payload.myTests,
//         // rightAnswers: action.payload.myCorrectAnswers,
//       };
//     case ADD_RIGHTQUESTIONS:
//       return {
//         ...state,
//         rightAnswers: action.payload.myCorrectAnswers,
//       };
//     default:
//       return state;
//   }
// };

// //action Criaor
// export const addState = payload => ({ type: ADD_OPTIONS, payload });

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOption1: 'Klener',
  selectedOption2: 10,
  questions: [],
  rightAnswers: [],
};

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    ADD_OPTIONS(state, action) {
      state.selectedOption1 = action.payload.selectedOption1;
      state.selectedOption2 = action.payload.selectedOption2;
      state.questions = action.payload.myTests;
    },
    ADD_RIGHTQUESTIONS(state, action) {
      state.rightAnswers = action.payload.myCorrectAnswers;
    },
    CLEAR_STATE(state, action) {
      return initialState;
    },
  },
});

export const { ADD_OPTIONS, ADD_RIGHTQUESTIONS, CLEAR_STATE } =
  testsSlice.actions;

export default testsSlice.reducer;
