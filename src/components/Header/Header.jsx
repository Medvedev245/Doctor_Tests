import { useSelector } from 'react-redux';
import { ContainerData, HeaderContainer, Text } from './Header.styled';

export const Header = () => {
  const selectedBook = useSelector(state => state.testsReducer.selectedOption1);
  const selectedNumber = useSelector(
    state => state.testsReducer.selectedOption2
  );
  // const elements2 = useSelector(state => state.testsReducer.selectedOption2);

  return (
    <HeaderContainer>
      <Text>Tests</Text>
      <ContainerData>
        <span>Selected base: {selectedBook}</span>
        <span>tests: {selectedNumber}</span>
      </ContainerData>
    </HeaderContainer>
  );
};
