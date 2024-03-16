import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormTest, FormText, ContainerCheck, Button } from './Tests.styled';

const Tests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [count, setCount] = useState(1);
  const [myCorrectAnswers, setMyCorrectAnswers] = useState([]); // Хранение правильных ответов

  const dispatch = useDispatch();

  const questions = useSelector(state => state.testsReducer.questions);
  const questions1 = useSelector(state => state);
  const handleAnswerSelect = answer => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(
        selectedAnswers.filter(selected => selected !== answer)
      );
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleNextQuestion = () => {
    setCount(count + 1);

    let correctAnswersCount = 0;

    questions[currentQuestion].correctAnswers.forEach(correctAnswer => {
      if (selectedAnswers.includes(correctAnswer)) {
        // Добавление правильного ответа в myCorrectAnswers
        setMyCorrectAnswers(prevAnswers => [
          ...prevAnswers,
          {
            topic: questions[currentQuestion].topic,
            book: questions[currentQuestion].book,
            answers: questions[currentQuestion].answers,
            question: questions[currentQuestion].question,
            correctAnswers: questions[currentQuestion].correctAnswers,
          },
        ]);
        correctAnswersCount++;
      }
    });

    setCorrectCount(
      correctCount +
        (correctAnswersCount ===
        questions[currentQuestion].correctAnswers.length
          ? 1
          : 0)
    );

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log(myCorrectAnswers);
      console.log(count);
      console.log(questions.length + 1);

      if (count === questions.length) {
        dispatch({
          type: 'ADD_RIGHTQUESTIONS',
          payload: { myCorrectAnswers },
        });

        console.log(questions1);
      }

      alert(`Правильных ответов - ${correctCount} из ${questions.length}`);
    }

    setSelectedAnswers([]);
  };

  return (
    <FormTest>
      <FormText>{questions[currentQuestion].question}</FormText>
      {questions[currentQuestion].answers.map((answer, index) => (
        <ContainerCheck key={index}>
          <input
            type="checkbox"
            checked={selectedAnswers.includes(answer)}
            onChange={() => handleAnswerSelect(answer)}
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <label>{answer}</label>
        </ContainerCheck>
      ))}

      {count <= questions.length ? (
        <div>
          <Button onClick={handleNextQuestion}>Next Question</Button>
          <span>
            {count} из {questions.length}
          </span>
        </div>
      ) : (
        <div>123</div>
      )}
    </FormTest>
  );
};

export default Tests;
