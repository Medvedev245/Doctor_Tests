import { useSelector } from 'react-redux';
import {
  List,
  TextPage,
  Item,
  Answers,
  Answer,
} from './AnsweredQuestions.styled';

const AnsweredQuestions = () => {
  const allQuestion = useSelector(state => state.testsReducer.questions);
  const rightQuestion = useSelector(state => state.testsReducer.rightAnswers);

  const updatedQuestions = allQuestion.map(question => {
    const updatedAnswers = question.answers.map(answer => {
      if (question.correctAnswers.includes(answer)) {
        return `${answer} (Правильно)`;
      } else {
        return answer;
      }
    });

    return {
      ...question,
      answers: updatedAnswers,
    };
  });

  const isRightQuestion = question => {
    return rightQuestion.some(rightQ => rightQ.question === question.question);
  };

  return (
    <div>
      <TextPage>Зеленым помечены правельно отвеченные вопросы</TextPage>
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
            <p>{question.question}</p>
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
    </div>
  );
};

export default AnsweredQuestions;
