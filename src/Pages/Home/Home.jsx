import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Klener from '../../Files/ClenerNew.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';

// import Olomouc from '../../Files/Clener.json';
// import Živný from '../../Files/Clener.json';
import {
  FormContainer,
  LinkToStart,
  WraperForm,
  ChoosenElement,
} from './Home.styled';
import { Button } from 'Pages/Tests/Tests.styled';
import Bases from 'components/Bases/Bases';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements3 = useSelector(state => state.testsReducer.questions);

  const handleOption1Change = event => {
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

      case 'Legislativa_Báze_2023':
        selectedFile = Legislativa;

        break;
      default:
        selectedFile = Klener;
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

    const myTests = generateTests(selectedOption1, selectedOption2);
    console.log(myTests);
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
            <option value="Legislativa_Báze_2023">Legislativa_Báze_2023</option>
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
            <option value="100">100</option>
            <option value="120">120</option>
            <option value="200">200</option>
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
      <Bases />
    </>
  );
};

export default Home;
