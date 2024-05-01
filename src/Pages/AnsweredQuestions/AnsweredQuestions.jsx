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
  LinkToPage,
} from './AnsweredQuestions.styled';

const AnsweredQuestions = () => {
  const allQuestion = useSelector(state => state.tests.questions);
  const rightQuestion = useSelector(state => state.tests.rightAnswers);
  console.log(allQuestion, rightQuestion);

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
      <TextPage>
        Correct answers <br /> {rightQuestion.length} out of{' '}
        {allQuestion.length}
      </TextPage>
      <TextSpan>Зеленым отмечены Ваши правельные ответы</TextSpan>
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
      <LinkToPage to="/">На Главную</LinkToPage>
    </div>
  );
};

export default AnsweredQuestions;
