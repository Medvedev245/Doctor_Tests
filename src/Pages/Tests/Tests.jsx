import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormTest, FormText, ContainerCheck, Button } from './Tests.styled';

const Tests = () => {
  //правельные ответы
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //выбранный ответ
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [count, setCount] = useState(1);

  const questions = useSelector(state => state.questions);

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
    console.log(count);
    let correctAnswersCount = 0;
    questions[currentQuestion].correctAnswers.forEach(correctAnswer => {
      if (selectedAnswers.includes(correctAnswer)) {
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
      const correctAnswers = questions.map(question =>
        question.correctAnswers.join(', ')
      );
      console.log(correctAnswers);
      alert(
        `правильных ответов - ${correctCount} из ${questions.length}`
        // `Results:\n${questions
        //   .map(
        //     (question, index) =>
        //       `${question.question}\nCorrect answers: ${correctAnswers[index]}`
        //   )
        //   .join('\n\n')}\n\nTotal correct answers: ${correctCount}`
      );
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

      <Button onClick={handleNextQuestion}>Next Question</Button>
      <div>
        {count} из {questions.length}
      </div>
    </FormTest>
  );
};

export default Tests;
