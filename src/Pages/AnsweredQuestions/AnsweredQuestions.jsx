import { useSelector } from 'react-redux';
import {
  List,
  TextPage,
  Item,
  Answers,
  Answer,
  TopicList,
  Question,
  TextSpan,
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
      <TextPage>Зеленым отмечены Ваши правельные ответы</TextPage>
      <TextSpan>Правильный ответ в тесте помечен - (Правильно)</TextSpan>
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
    </div>
  );
};

export default AnsweredQuestions;
