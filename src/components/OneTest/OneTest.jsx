import { FindContainer, TextFind, TextInput } from './OneTest.styled';

const FindTest = props => {
  const { handleSearchInputChange } = props;

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
