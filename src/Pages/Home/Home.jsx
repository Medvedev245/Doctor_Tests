import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Medicine_2023 from '../../Files/Medicine_2023.json';
import Klener from '../../Files/ClenerNew.json';
import Živný from '../../Files/Živný.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';
import { ADD_OPTIONS } from 'store/testsReducer';

// import Olomouc from '../../Files/Clener.json';
// import Živný from '../../Files/Clener.json';
import {
  FormContainer,
  LinkToStart,
  WraperForm,
  ChoosenElement,
} from './Home.styled';
import { Button } from 'Pages/Tests/Tests.styled';
// import Bases from 'components/Bases/Bases.tsx';
import Bases from 'components/Bases/Bases';
import { Select } from 'Pages/AllTests/AllTests.styled';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const dispatch = useDispatch();
  const elements3 = useSelector(state => state.tests.questions);

  const choosenBase = JSON.parse(localStorage.getItem('myCollection'));

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

      case 'Medicine_2023':
        selectedFile = Medicine_2023;
        break;

      case 'Živný':
        selectedFile = Živný;
        break;

      case 'My_Base':
        selectedFile = choosenBase;
        break;

      default:
        selectedFile = Klener;
    }

    if (two >= selectedFile.length) {
      return selectedFile;
    }
    const number = [];
    const selectedNamesArray = [];

    // console.log('two:', two, 'selectedFile.length:', selectedFile.length);

    // Generate random numbers
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

    dispatch(
      ADD_OPTIONS({
        selectedOption1,
        selectedOption2,
        myTests,
      })
    );
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <WraperForm>
          <label htmlFor="select1">Vyberte testy</label>

          <Select
            id="select1"
            value={selectedOption1}
            onChange={handleOption1Change}
          >
            <option value="All">All</option>
            <option value="Klener">Klener</option>
            <option value="Živný">Živný</option>
            <option value="Legislativa_Báze_2023">Legislativa_Báze_2023</option>
            <option value="Medicine_2023">Medicine_2023</option>
            <option value="My_Base">My Base</option>
          </Select>
        </WraperForm>
        <WraperForm>
          <label htmlFor="select2">Vyberte počet testů</label>
          <Select
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
          </Select>
        </WraperForm>

        {elements3.length > 0 ? (
          <LinkToStart to={'/tests'}>Start</LinkToStart>
        ) : (
          <Button type="submit">Vybrat</Button>
        )}
      </FormContainer>

      <ChoosenElement>
        Vybraný - {selectedOption1} {selectedOption2}
      </ChoosenElement>
      <Bases />
    </>
  );
};

export default Home;
