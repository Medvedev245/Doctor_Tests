import { useState } from 'react';
import Medicine_2023 from '../../Files/Medicine_2023.json';
import Klener from '../../Files/ClenerNew.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';
import Živný from '../../Files/Živný.json';
import debounce from 'lodash/debounce';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Element,
  Item,
  List,
  ListQuestion,
  Question,
  Select,
  SpanElemet,
  TopicContainer,
  ButtonDescr,
  ButtonContainer,
  TextAllTests,
} from './AllTests.styled';
import LoadMore from 'components/LoadMore/LoadMore';
import { FormContainer, WraperForm } from 'Pages/Home/Home.styled';
import Modal from 'components/Modal/Modal';
import FindTest from 'components/OneTest/OneTest';
// import Functions from 'Files/Functions';

const AllTests = () => {
  const [allTests, setAllTests] = useState(Legislativa);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Состояние для хранения выбранного вопроса
  const [picedQuestions, setPickedQuestions] = useState(
    JSON.parse(localStorage.getItem('myCollection')) || []
  );

  const isTestInFavorites = test => {
    return picedQuestions.some(item => item.question === test.question);
  };
  // console.log(picedQuestions);

  const renderAnswer = (answer, isCorrect) => {
    return isCorrect ? (
      <span style={{ backgroundColor: '#1fa01f6f' }}>{answer}</span>
    ) : (
      <span>{answer}</span>
    );
  };

  const handleOption1Change = event => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'Klener':
        setAllTests(Klener);
        break;
      case 'Medicine_2023':
        setAllTests(Medicine_2023);
        break;
      case 'Legislativa_Báze_2023':
        setAllTests(Legislativa);
        break;
      case 'Živný':
        setAllTests(Živný);
        break;
      default:
        setAllTests(Legislativa);
    }
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const openModal = question => {
    // Передаем вопрос в функцию openModal
    setSelectedQuestion(question); // Устанавливаем выбранный вопрос
    setModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalActive(false);
    document.body.style.overflow = 'auto';
  };

  const addToFavorite = test => {
    console.log(test);
    const isAlreadyAdded = picedQuestions.find(
      item => item.question === test.question
    );

    // Если элемент уже добавлен, то удаляем его
    if (isAlreadyAdded) {
      const updatedCollection = picedQuestions.filter(
        item => item.question !== test.question
      );
      setPickedQuestions(updatedCollection);
      localStorage.setItem('myCollection', JSON.stringify(updatedCollection));
      Notify.warning('Test odstraněn z oblíbených');
      // console.log(updatedCollection.length);
      return;
    }

    // Если элемент не добавлен, то добавляем его
    const updatedCollection = [...picedQuestions, test];
    setPickedQuestions(updatedCollection);
    localStorage.setItem('myCollection', JSON.stringify(updatedCollection));
    // console.log(collection.length);
    Notify.success('Test přidán do oblíbených');
  };

  const handleSearchInputChange = debounce(event => {
    setSearchQuery(event.target.value);
    // console.log(searchQuery);
  }, 500);

  const filteredQuestions = allTests.filter(question =>
    question.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const testsPerPage = 30; // Количество тестов на странице
  const startIndex = (currentPage - 1) * testsPerPage;
  const endIndex = startIndex + testsPerPage;
  const doneQuestions = filteredQuestions.slice(startIndex, endIndex);
  return (
    <>
      <TextAllTests>All Tests</TextAllTests>
      <FormContainer action="formBase">
        <WraperForm>
          <label htmlFor="formBase">Vyberte testy</label>
          <Select id="formBase" onChange={handleOption1Change}>
            <option value="Legislativa_Báze_2023">Legislativa_Báze_2023</option>
            <option value="Klener">Klener</option>
            <option value="Živný">Živný(1-2117)</option>
            <option value="Medicine_2023">Medicine_2023</option>
          </Select>
        </WraperForm>
      </FormContainer>
      <div>
        <FindTest handleSearchInputChange={handleSearchInputChange} />
        <List>
          {doneQuestions.map((test, index) => (
            <Item key={index}>
              <TopicContainer>
                <SpanElemet>Book: {test.book}</SpanElemet>
                <SpanElemet>Topic: {test.topic}</SpanElemet>
              </TopicContainer>

              <Question>{test.question}</Question>
              <ListQuestion>
                {test.answers.map((answer, answerIndex) => (
                  <Element key={answerIndex}>
                    {renderAnswer(answer, test.correctAnswers.includes(answer))}
                  </Element>
                ))}
              </ListQuestion>
              <ButtonContainer>
                <ButtonDescr
                  onClick={() => openModal(test)}
                  disabled={!test.description}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                  >
                    <path d="M 50 16 C 38.745078 16 28.536804 19.528325 21.103516 25.289062 C 13.670227 31.0498 9 39.090825 9 48 C 9 56.843516 13.643104 64.803099 20.982422 70.556641 C 20.979022 77.17314 20.872179 82.713759 17.292969 86.292969 A 1.0001 1.0001 0 0 0 18 88 C 24.741238 88 33.13907 85.975155 38.578125 78.707031 C 42.210021 79.527556 46.031696 80 50 80 C 61.254922 80 71.463196 76.471675 78.896484 70.710938 C 86.329773 64.950199 91 56.909175 91 48 C 91 39.090825 86.329773 31.0498 78.896484 25.289062 C 71.463196 19.528325 61.254922 16 50 16 z M 50 18 C 60.836078 18 70.627913 21.410128 77.671875 26.869141 C 84.715837 32.328153 89 39.788175 89 48 C 89 56.211825 84.715837 63.671847 77.671875 69.130859 C 70.627913 74.589872 60.836078 78 50 78 C 45.963088 78 42.07133 77.527971 38.412109 76.652344 A 1.0001 1.0001 0 0 0 37.361328 77.048828 C 32.908474 83.389417 26.082467 85.468934 20.003906 85.837891 C 22.866127 81.619726 23 76.123 23 70.216797 L 23 70.140625 A 1.0001 1.0001 0 0 0 22.605469 69.345703 C 15.3982 63.868957 11 56.317715 11 48 C 11 39.788175 15.284163 32.328153 22.328125 26.869141 C 29.372087 21.410128 39.163922 18 50 18 z M 50 21 C 40.109772 21 31.134601 23.999444 24.609375 28.871094 C 18.084149 33.742743 14 40.513854 14 48 C 14 53.479972 16.189921 58.584917 19.921875 62.830078 A 0.50030972 0.50030972 0 1 0 20.673828 62.169922 C 17.075782 58.077083 15 53.214028 15 48 C 15 40.877146 18.876757 34.397976 25.207031 29.671875 C 31.537305 24.945774 40.312228 22 50 22 C 59.503691 22 68.127545 24.834788 74.427734 29.404297 A 0.50005 0.50005 0 1 0 75.015625 28.595703 C 68.523814 23.887212 59.702309 21 50 21 z M 49.5 28 C 46.495378 28 44 30.214474 44 33 C 44 35.785526 46.495378 38 49.5 38 C 52.504622 38 55 35.785526 55 33 C 55 30.214474 52.504622 28 49.5 28 z M 49.5 29 C 52.018226 29 54 30.814963 54 33 C 54 35.185037 52.018226 37 49.5 37 C 46.981774 37 45 35.185037 45 33 C 45 30.814963 46.981774 29 49.5 29 z M 76.5 29.880859 A 0.50005 0.50005 0 0 0 76.179688 30.767578 C 76.417254 30.9667 76.650339 31.169004 76.878906 31.373047 A 0.50005839 0.50005839 0 1 0 77.544922 30.626953 C 77.307489 30.414996 77.064746 30.206831 76.820312 30.001953 A 0.50005 0.50005 0 0 0 76.5 29.880859 z M 78.78125 31.994141 A 0.50005 0.50005 0 0 0 78.419922 32.847656 C 78.732508 33.170072 79.033765 33.497441 79.326172 33.830078 A 0.50030972 0.50030972 0 0 0 80.078125 33.169922 C 79.774531 32.824559 79.460133 32.485928 79.136719 32.152344 A 0.50005 0.50005 0 0 0 78.78125 31.994141 z M 80.890625 34.494141 A 0.50005 0.50005 0 0 0 80.529297 35.302734 C 83.383758 39.071094 85 43.397373 85 48 C 85 55.122854 81.123243 61.602024 74.792969 66.328125 C 68.462695 71.054226 59.687772 74 50 74 C 48.831137 74 47.676738 73.95713 46.537109 73.873047 A 0.50040144 0.50040144 0 0 0 46.462891 74.871094 C 47.627264 74.957007 48.806863 75 50 75 C 59.890228 75 68.865399 72.000556 75.390625 67.128906 C 81.915851 62.257257 86 55.486146 86 48 C 86 43.162627 84.29371 38.614906 81.326172 34.697266 A 0.50005 0.50005 0 0 0 80.941406 34.494141 A 0.50005 0.50005 0 0 0 80.890625 34.494141 z M 42.5 40 A 0.50005 0.50005 0 0 0 42 40.5 L 42 44.5 A 0.50005 0.50005 0 0 0 42.5 45 L 45.5 45 C 45.781469 45 46 45.218531 46 45.5 L 46 60.5 C 46 60.781469 45.781469 61 45.5 61 L 41.5 61 A 0.50005 0.50005 0 0 0 41 61.5 L 41 65.5 A 0.50005 0.50005 0 0 0 41.5 66 L 59.5 66 A 0.50005 0.50005 0 0 0 60 65.5 L 60 61.5 A 0.50005 0.50005 0 0 0 59.5 61 L 55.5 61 C 55.218531 61 55 60.781469 55 60.5 L 55 40.5 A 0.50005 0.50005 0 0 0 54.5 40 L 42.5 40 z M 43 41 L 54 41 L 54 60.5 C 54 61.322531 54.677469 62 55.5 62 L 59 62 L 59 65 L 42 65 L 42 62 L 45.5 62 C 46.322531 62 47 61.322531 47 60.5 L 47 45.5 C 47 44.677469 46.322531 44 45.5 44 L 43 44 L 43 41 z"></path>
                  </svg>
                  Show Description
                </ButtonDescr>

                <ButtonDescr onClick={e => addToFavorite(test)}>
                  <svg
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 15"
                    style={{
                      borderRadius: '10px',
                      position: 'relative',
                      backgroundColor: isTestInFavorites(test)
                        ? 'rgba(187,154,230, 1)'
                        : 'white',
                    }}
                  >
                    <g transform="translate(-2, 1)">
                      <path d="M7.85 0.428c-1.785 0.13-3.332 1.385-3.828 3.103-0.14 0.488-0.16 0.637-0.158 1.245 0 0.488 0.008 0.598 0.057 0.825 0.162 0.765 0.48 1.422 0.957 1.988 0.105 0.122 1.525 1.558 3.155 3.188l2.965 2.962 3.060-3.063c1.945-1.948 3.113-3.135 3.207-3.262 0.398-0.535 0.65-1.080 0.793-1.715 0.26-1.175 0.023-2.405-0.66-3.408-0.2-0.295-0.543-0.67-0.81-0.887-1.212-0.99-2.845-1.26-4.31-0.713-0.407 0.152-0.73 0.33-1.098 0.605l-0.18 0.135-0.107-0.088c-0.463-0.375-1.185-0.71-1.82-0.842-0.2-0.040-0.853-0.107-0.938-0.098-0.012 0.002-0.143 0.012-0.287 0.025zM9 1.182c0.69 0.162 1.248 0.465 1.78 0.967l0.232 0.217 0.242-0.232c0.517-0.495 1.1-0.807 1.795-0.965 0.227-0.050 0.33-0.057 0.762-0.057 0.558 0 0.73 0.025 1.185 0.178 1.070 0.355 1.933 1.217 2.288 2.285 0.135 0.41 0.168 0.598 0.183 1.063 0.010 0.357 0.005 0.473-0.038 0.725-0.093 0.537-0.277 1.005-0.582 1.465-0.137 0.208-0.483 0.565-3 3.085l-2.848 2.85-2.777-2.775c-1.967-1.968-2.828-2.845-2.955-3.012-0.377-0.495-0.617-1.085-0.705-1.725-0.27-1.97 1.082-3.79 3.055-4.112 0.345-0.057 1.045-0.033 1.383 0.045z"></path>
                    </g>
                  </svg>
                  Add to favorite
                </ButtonDescr>
              </ButtonContainer>
            </Item>
          ))}
        </List>
      </div>
      <LoadMore
        currentPage={currentPage}
        testsPerPage={testsPerPage}
        totalTests={filteredQuestions.length}
        onPageChange={handlePageChange}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
        props={selectedQuestion}
      />
      {/* <Functions></Functions> */}
    </>
  );
};

export default AllTests;
