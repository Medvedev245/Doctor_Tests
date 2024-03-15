import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Tests = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);

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
      console.log(correctCount);
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
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((answer, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={selectedAnswers.includes(answer)}
            onChange={() => handleAnswerSelect(answer)}
          />
          <label>{answer}</label>
        </div>
      ))}

      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Tests;
