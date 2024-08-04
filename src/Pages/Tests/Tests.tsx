import { useState } from 'react';
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
import Timer from 'components/Timer/Timer';
import { ADD_RIGHTQUESTIONS } from 'store/testsReducer';
import { CLEAR_STATE } from 'store/testsReducer';
import { Progressbar } from 'components/Progressbar/Progressbar';
import { RootState } from 'store';
import { Test } from '../AllTests/AllTests';

const Tests = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [myCorrectAnswers, setMyCorrectAnswers] = useState<Test[] | any>([]); // Хранение правильных ответов
  const [addColor, setAddColor] = useState<boolean>(false); // Состояние для подсветки правильных ответов
  const [time, setTime] = useState<{ minutes: number; seconds: number }>({
    minutes: 0,
    seconds: 0,
  }); // состояние таймера

  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.tests.questions);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prevAnswers =>
      prevAnswers.includes(answer)
        ? prevAnswers.filter(selected => selected !== answer)
        : [...prevAnswers, answer]
    );
  };

  const comparison = () => {
    setAddColor(prevState => !prevState); // Изменяем состояние для подсветки при каждом нажатии
  };

  const handleNextQuestion = () => {
    setAddColor(false);
    setCount(prevCount => prevCount + 1);

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const correctAnswersCount = currentQuestion.correctAnswers.filter(
      correctAnswer => selectedAnswers.includes(correctAnswer)
    ).length;

    if (correctAnswersCount === currentQuestion.correctAnswers.length) {
      setMyCorrectAnswers((prevAnswers: Test[]) => [
        ...prevAnswers,
        {
          topic: currentQuestion.topic,
          book: currentQuestion.book,
          answers: currentQuestion.answers,
          question: currentQuestion.question,
          correctAnswers: currentQuestion.correctAnswers,
        },
      ]);
    }

    setCorrectCount(
      prevCount =>
        prevCount +
        (correctAnswersCount === currentQuestion.correctAnswers.length ? 1 : 0)
    );

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevQuestion => prevQuestion + 1);
    } else {
      if (count === questions.length) {
        dispatch(ADD_RIGHTQUESTIONS({ myCorrectAnswers }));
      }
    }

    setSelectedAnswers([]);
  };

  const clearState = () => {
    dispatch(CLEAR_STATE());
  };

  const openModal = () => {
    setModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalActive(false);
    document.body.style.overflow = 'auto';
  };

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div>Loading...</div>; // Или другой индикатор загрузки
  }

  const currentQuestionProps = {
    question: currentQuestion.question,
    description: currentQuestion.description?.[0] || '',
    img: '', // Укажите изображение, если оно есть
  };

  return (
    <FormTest>
      <Answer>
        <FormText>{currentQuestion.question}</FormText>
        {currentQuestion.answers.map((answer, index) => (
          <ContainerCheck
            key={index}
            style={{
              backgroundColor:
                addColor && currentQuestion.correctAnswers.includes(answer)
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

        {currentQuestion.description &&
          currentQuestion.description.length > 0 &&
          currentQuestion.description[0] !== '' && (
            <ButtonDescr onClick={openModal}>Show Description</ButtonDescr>
          )}
      </Answer>

      {count <= questions.length ? (
        <AnswerBlock>
          <Timer time={time} setTime={setTime} />
          <AnswerControl>
            <Button onClick={handleNextQuestion}>Next Question</Button>
            <span style={{ width: '70px' }}>
              {count} из {questions.length}
            </span>
            <Button onClick={comparison}>Check</Button>
          </AnswerControl>
        </AnswerBlock>
      ) : (
        <LinkContainer>
          <Progressbar
            correctCount={correctCount}
            questions={questions.length}
          />
          <h3>{`Correct answers - ${correctCount} из ${questions.length}`}</h3>
          <h3>{`Testing time ${time.minutes} : ${time.seconds}`}</h3>
          <LinkToPage to="/AnsweredQuestions">
            Перейти к разбору тестов
          </LinkToPage>
          <LinkToPage onClick={clearState} to="/">
            На Главную
          </LinkToPage>
        </LinkContainer>
      )}
      <Modal
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
        props={currentQuestionProps}
      />
    </FormTest>
  );
};

export default Tests;
