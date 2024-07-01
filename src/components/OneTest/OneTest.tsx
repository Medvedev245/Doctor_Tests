import React from 'react';
import { FindContainer, TextFind, TextInput } from './OneTest.styled';

interface FindTestProps {
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FindTest: React.FC<FindTestProps> = ({ handleSearchInputChange }) => {
  return (
    <FindContainer>
      <TextFind>Najděte test</TextFind>
      <TextInput
        type="text"
        placeholder="Enter any word"
        onChange={handleSearchInputChange}
      />
    </FindContainer>
  );
};

export default FindTest;
