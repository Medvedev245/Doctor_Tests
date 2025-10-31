import { useState, useEffect } from 'react';
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
  const [myCorrectAnswers, setMyCorrectAnswers] = useState<Test[] | any>([]);
  const [addColor, setAddColor] = useState<boolean>(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [time, setTime] = useState<{ minutes: number; seconds: number }>({
    minutes: 0,
    seconds: 0,
  });

  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.tests.questions);

  const shuffleAnswers = (answers: string[]) => {
    if (answers.length <= 1) return answers;

    const arr = [...answers];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      setShuffledAnswers(shuffleAnswers(currentQuestion.answers));
    }
  }, [currentQuestionIndex, questions]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prevAnswers =>
      prevAnswers.includes(answer)
        ? prevAnswers.filter(selected => selected !== answer)
        : [...prevAnswers, answer]
    );
  };

  const comparison = () => {
    setAddColor(prevState => !prevState);
  };

  const handleNextQuestion = () => {
    setAddColor(false);
    setCount(prevCount => prevCount + 1);

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const isAnswerCorrect = (
      selected: string[],
      correct: string[]
    ): boolean => {
      if (selected.length !== correct.length) return false;
      return correct.every(ans => selected.includes(ans));
    };

    const correct = isAnswerCorrect(
      selectedAnswers,
      currentQuestion.correctAnswers
    );

    if (correct) {
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
      setCorrectCount(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      dispatch(ADD_RIGHTQUESTIONS({ myCorrectAnswers }));
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
    return <div>Loading...</div>;
  }

  const currentQuestionProps = {
    question: currentQuestion.question,
    description: currentQuestion.description?.[0] || '',
    img: '',
  };

  return (
    <FormTest>
      <Answer>
        <FormText>{currentQuestion.question}</FormText>

        {shuffledAnswers.map((answer, index) => (
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
