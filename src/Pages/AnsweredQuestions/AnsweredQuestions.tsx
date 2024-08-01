import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  TextPage,
  Item,
  Answers,
  Answer,
  TopicList,
  Question,
  TextSpan,
  LinkToPage,
} from './AnsweredQuestions.styled';
import { CLEAR_STATE } from 'store/testsReducer';
import { Test } from 'Pages/AllTests/AllTests';
import { RootState } from 'store';

const AnsweredQuestions = () => {
  const allQuestion = useSelector((state: RootState) => state.tests.questions);
  const rightQuestion = useSelector(
    (state: RootState) => state.tests.rightAnswers
  );
  console.log(allQuestion, rightQuestion);
  const dispatch = useDispatch();

  const updatedQuestions = allQuestion.map((question: Test) => {
    const updatedAnswers = question.answers.map(answer => {
      if (question.correctAnswers.includes(answer)) {
        return `${answer} (Správně)`;
      } else {
        return answer;
      }
    });

    return {
      ...question,
      answers: updatedAnswers,
    };
  });

  const clearState = () => {
    dispatch(CLEAR_STATE({}));
  };

  const isRightQuestion = (question: Test, index: number, arr: Test[]) => {
    return rightQuestion.some(
      (rightQ: Test) => rightQ.question === question.question
    );
  };

  return (
    <div>
      <TextPage>
        Correct answers <br /> {rightQuestion.length} out of{' '}
        {allQuestion.length}
      </TextPage>
      <TextSpan>Vaše správné odpovědi jsou označeny zeleně</TextSpan>
      <TextSpan>Správná odpověď v testu je označena - (Správně)</TextSpan>
      <List>
        {updatedQuestions.map((question, index, arr) => (
          <Item
            key={index}
            style={{
              backgroundColor: isRightQuestion(question, index, arr)
                ? 'lightgreen'
                : 'white',
            }}
          >
            <TopicList>
              <span>База: {question.book}</span>
              <span>Тема: {question.topic}</span>
            </TopicList>

            <Question>{question.question}</Question>
            <Answers>
              {question.answers.map((question, index, arr) => {
                return (
                  <Answer key={index}>
                    {index + 1} - {question}
                  </Answer>
                );
              })}
            </Answers>
          </Item>
        ))}
      </List>
      <LinkToPage onClick={clearState} to="/">
        На Главную
      </LinkToPage>
    </div>
  );
};

export default AnsweredQuestions;
