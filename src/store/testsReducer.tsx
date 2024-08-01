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
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Test } from '../Pages/AllTests/AllTests';

interface TestSlice {
  selectedOption1: string;
  selectedOption2: number;
  questions: Test[];
  rightAnswers: number[];
}

interface AddOptionsPayload {
  selectedOption1: string;
  selectedOption2: number;
  myTests: Test[];
}

interface AddRightQuestionsPayload {
  myCorrectAnswers: number[];
}

const initialState: TestSlice = {
  selectedOption1: 'Klener',
  selectedOption2: 10,
  questions: [],
  rightAnswers: [],
};

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    ADD_OPTIONS(state, action: PayloadAction<AddOptionsPayload>) {
      state.selectedOption1 = action.payload.selectedOption1;
      state.selectedOption2 = action.payload.selectedOption2;
      state.questions = action.payload.myTests;
    },
    ADD_RIGHTQUESTIONS(state, action: PayloadAction<AddRightQuestionsPayload>) {
      state.rightAnswers = action.payload.myCorrectAnswers;
    },
    CLEAR_STATE(state) {
      return initialState;
    },
  },
});

export const { ADD_OPTIONS, ADD_RIGHTQUESTIONS, CLEAR_STATE } =
  testsSlice.actions;

export default testsSlice.reducer;
