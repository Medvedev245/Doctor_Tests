import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormTest,
  FormText,
  ContainerCheck,
  Button,
  LinkContainer,
  LinkToPage,
  AnswerControl,
  AnswerBlock,
  Answer,
  ButtonDescr,
} from './Tests.styled';
import Modal from '../../components/Modal/Modal';

const Tests = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [count, setCount] = useState(1);
  const [myCorrectAnswers, setMyCorrectAnswers] = useState([]); // Хранение правильных ответов
  const [addColor, setAddColor] = useState(false); // Состояние для подсветки правильных ответов

  const dispatch = useDispatch();
  const questions = useSelector(state => state.testsReducer.questions);

  const handleAnswerSelect = answer => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(
        selectedAnswers.filter(selected => selected !== answer)
      );
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const comparison = () => {
    setAddColor(prevState => !prevState); // Изменяем состояние для подсветки при каждом нажатии
  };

  const handleNextQuestion = () => {
    setAddColor(false);
    setCount(count + 1);

    let correctAnswersCount = 0;

    questions[currentQuestion].correctAnswers.forEach(correctAnswer => {
      if (selectedAnswers.includes(correctAnswer)) {
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
      if (count === questions.length) {
        dispatch({
          type: 'ADD_RIGHTQUESTIONS',
          payload: { myCorrectAnswers },
        });
      }
      // console.log(correctCount);
      // alert(`Правильных ответов - ${correctCount} из ${questions.length}`);
    }

    setSelectedAnswers([]);
  };

  const openModal = () => {
    setModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalActive(false);
    document.body.style.overflow = 'auto';
  };

  // console.log(questions[currentQuestion].description);

  return (
    <FormTest>
      <Answer>
        <FormText>{questions[currentQuestion].question}</FormText>
        {questions[currentQuestion].answers.map((answer, index) => (
          <ContainerCheck
            key={index}
            style={{
              backgroundColor:
                addColor &&
                questions[currentQuestion].correctAnswers.includes(answer)
                  ? '#1fa01f6f'
                  : '',
            }}
          >
            <input
              type="checkbox"
              checked={selectedAnswers.includes(answer)}
              onChange={() => handleAnswerSelect(answer)}
              style={{ width: '20px', height: '20px' }}
            />
            <label>{answer}</label>
          </ContainerCheck>
        ))}

        {questions[currentQuestion].book &&
        questions[currentQuestion].book[0] === 'Klener'
          ? null
          : questions[currentQuestion].description &&
            questions[currentQuestion].description[0] !== '' && (
              <ButtonDescr onClick={openModal}>Show Description</ButtonDescr>
            )}
      </Answer>

      {count <= questions.length ? (
        <AnswerBlock>
          <AnswerControl>
            <Button onClick={handleNextQuestion}>Next Question</Button>
            <span>
              {count} из {questions.length}
            </span>
          </AnswerControl>
          <Button onClick={comparison}>Check</Button>
        </AnswerBlock>
      ) : (
        <LinkContainer>
          <h3>{`Правильных ответов - ${correctCount} из ${questions.length}`}</h3>
          <LinkToPage to="/AnsweredQuestions">
            Перейти к разбору тестов
          </LinkToPage>
          <LinkToPage to="/">На Главную</LinkToPage>
        </LinkContainer>
      )}
      <Modal
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
        props={questions[currentQuestion]}
      />
    </FormTest>
  );
};

export default Tests;
