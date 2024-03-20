import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Klener from '../../Files/Clener.json';
import KlenerNew from '../../Files/ClenerNew.json';
import Olomouc from '../../Files/Clener.json';
// import Živný from '../../Files/Clener.json';
import {
  FormContainer,
  LinkToStart,
  WraperForm,
  ChoosenElement,
} from './Home.styled';
import { Button } from 'Pages/Tests/Tests.styled';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements3 = useSelector(state => state.testsReducer.questions);

  const handleOption1Change = event => {
    console.log(event.target.value);
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = event => {
    setSelectedOption2(event.target.value);
  };

  const generateTests = (one, two) => {
    let selectedFile;
    switch (one) {
      case 'Klener':
        selectedFile = Klener;
        break;
      case 'Olomouc':
        selectedFile = Olomouc;
        break;
      case 'Živný':
        selectedFile = KlenerNew;
        break;
      default:
        selectedFile = KlenerNew;
    }

    const number = [];
    const selectedNamesArray = [];

    // Generate  random numbers
    while (number.length < two) {
      const randomNum = Math.floor(Math.random() * selectedFile.length);
      if (!number.includes(randomNum)) {
        number.push(randomNum);
      }
    }

    // Push names corresponding to the generated numbers
    for (const num of number) {
      selectedNamesArray.push(selectedFile[num]);
    }

    return selectedNamesArray;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    const myTests = generateTests(selectedOption1, selectedOption2);
    // addState(selectedOption1, selectedOption2, myTests);
    dispatch({
      type: 'ADD_OPTIONS',
      payload: { selectedOption1, selectedOption2, myTests },
    });
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <WraperForm>
          <label htmlFor="select1">Выбери базу</label>

          <select
            id="select1"
            value={selectedOption1}
            onChange={handleOption1Change}
          >
            <option value="All">All</option>
            <option value="Klener">Klener</option>
            <option value="Olomouc">Olomouc</option>
            <option value="Živný">Živný</option>
          </select>
        </WraperForm>
        <WraperForm>
          <label htmlFor="select2">Выбери количество тестов</label>
          <select
            id="select2"
            value={selectedOption2}
            onChange={handleOption2Change}
          >
            <option value="-">-</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </WraperForm>

        {elements3.length > 0 ? (
          <LinkToStart to={'/tests'}>Начать !</LinkToStart>
        ) : (
          <Button type="submit">Выбрать</Button>
        )}
      </FormContainer>

      <ChoosenElement>
        Выбрано - {selectedOption1} {selectedOption2}
      </ChoosenElement>
      <p>На данный момент на сайте есть базы: Klener(5135 tests)</p>
    </>
  );
};

export default Home;
