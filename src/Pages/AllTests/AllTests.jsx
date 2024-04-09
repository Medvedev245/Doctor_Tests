import { useState } from 'react';
import Medicine_2023 from '../../Files/Medicine_2023.json';
import Klener from '../../Files/ClenerNew.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';
import Živný from '../../Files/Živný.json';
import {
  Element,
  Item,
  List,
  ListQuestion,
  Question,
  Select,
} from './AllTests.styled';
import LoadMore from 'components/LoadMore/LoadMore';
import { FormContainer, WraperForm } from 'Pages/Home/Home.styled';
import { ButtonDescr } from 'Pages/Tests/Tests.styled';
import Modal from 'components/Modal/Modal';
// import Functions from 'Files/Functions';

const AllTests = () => {
  const [allTests, setAllTests] = useState(Legislativa);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Состояние для хранения выбранного вопроса

  const testsPerPage = 30; // Количество тестов на странице

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

  const startIndex = (currentPage - 1) * testsPerPage;
  const endIndex = startIndex + testsPerPage;
  const visibleTests = allTests.slice(startIndex, endIndex);

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

  return (
    <>
      <FormContainer action="formBase">
        <WraperForm>
          <label htmlFor="formBase">Vyberte testy</label>
          <Select id="formBase" onChange={handleOption1Change}>
            <option value="Legislativa_Báze_2023">Legislativa_Báze_2023</option>
            <option value="Klener">Klener</option>
            <option value="Živný">Živný(1-270)</option>
            <option value="Medicine_2023">Medicine_2023</option>
          </Select>
        </WraperForm>
      </FormContainer>
      <div>
        <List>
          {visibleTests.map((test, index) => (
            <Item key={index}>
              <Question>{test.question}</Question>
              <ListQuestion>
                {test.answers.map((answer, answerIndex) => (
                  <Element key={answerIndex}>
                    {renderAnswer(answer, test.correctAnswers.includes(answer))}
                  </Element>
                ))}
              </ListQuestion>

              {test.description && (
                <ButtonDescr
                  style={{ alignSelf: 'flex-end' }}
                  onClick={() => openModal(test)}
                >
                  Show Description
                </ButtonDescr>
              )}
            </Item>
          ))}
        </List>
      </div>
      <LoadMore
        currentPage={currentPage}
        testsPerPage={testsPerPage}
        totalTests={allTests.length}
        onPageChange={handlePageChange}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
        props={selectedQuestion} // Передаем выбранный вопрос в компонент Modal
      />
      {/* <Functions></Functions> */}
    </>
  );
};

export default AllTests;
