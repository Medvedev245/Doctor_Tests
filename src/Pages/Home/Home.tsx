import Medicine_2023 from '../../Files/Medicine_2023.json';
import Medicine_2025 from '../../Files/Medicine_15_05_2025.json';
import Klener from '../../Files/ClenerNew.json';
import Živný from '../../Files/Živný.json';
import Legislativa from '../../Files/Legislativa_Báze_2023.json';
import Bases from 'components/Bases/Bases';
import {
  FormContainer,
  LinkToStart,
  WraperForm,
  ChoosenElement,
} from './Home.styled';
import { Button } from 'Pages/Tests/Tests.styled';
import { ADD_OPTIONS } from 'store/testsReducer';
import { Test } from '../AllTests/AllTests';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'Pages/AllTests/AllTests.styled';
import { RootState } from 'store';

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>('');
  const [selectedOption2, setSelectedOption2] = useState<string | number>('');

  const dispatch = useDispatch();
  const elements3 = useSelector((state: RootState) => state.tests.questions);

  const choosenBase: Test[] = JSON.parse(
    localStorage.getItem('myCollection') || '[]'
  ) as Test[];

  const handleOption1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };

  const generateTests = (one: string, two: number) => {
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
      case 'Medicine_2025':
        selectedFile = Medicine_2025;
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
    const number: number[] = [];
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const testCount = parseInt(selectedOption2.toString(), 10);
    const myTests = generateTests(selectedOption1, testCount);

    dispatch(
      ADD_OPTIONS({
        selectedOption1,
        selectedOption2: testCount,
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
            <option value="Medicine_2025">Medicine_2025</option>
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
