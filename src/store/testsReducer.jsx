const defaultState = {
  selectedOption1: 'Klener',
  selectedOption2: 10,
  questions: [],
  rightAnswers: [],
};

export const testsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTIONS':
      return {
        selectedOption1: action.payload.selectedOption1,
        selectedOption2: action.payload.selectedOption2,
        questions: action.payload.myTests,
        rightAnswers: action.payload.myCorrectAnswers,
      };
    case 'ADD_RIGHTQUESTIONS':
      return {
        ...state,
        rightAnswers: action.payload.myCorrectAnswers,
      };
    default:
      return state;
  }
};
