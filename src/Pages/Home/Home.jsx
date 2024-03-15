import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Klener from '../../Files/Clener.json';
import Olomouc from '../../Files/Clener.json';
import Živný from '../../Files/Clener.json';
import { FormContainer, Button } from './Home.styled';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements = useSelector(state => state.selectedOption1);
  const elements2 = useSelector(state => state.selectedOption2);
  const elements3 = useSelector(state => state.questions);
  console.log('state-slice', elements3);

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
      case 'Olomouc':
        selectedFile = Olomouc;
        break;
      case 'Živný':
        selectedFile = Živný;
        break;
      default:
        selectedFile = Klener;
    }

    const number = [];
    const selectedNamesArray = [];

    // Generate 3 random numbers
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
    dispatch({
      type: 'ADD_OPTIONS',
      payload: { selectedOption1, selectedOption2, myTests },
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="select1">Выбери базу</label>
        <select
          id="select1"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <option value="Klener">Klener</option>
          <option value="Olomouc">Olomouc</option>
          <option value="Živný">Živný</option>
        </select>
      </div>
      <div>
        <label htmlFor="select2">Выбери количество тестов</label>
        <select
          id="select2"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <Button type="submit">Выбрать</Button>
      {elements3.length > 0 && <Link to={'/tests'}>Начать !</Link>}
      <div>
        Ты выбрал -{elements},{elements2}
      </div>
    </FormContainer>
  );
};

export default Home;
