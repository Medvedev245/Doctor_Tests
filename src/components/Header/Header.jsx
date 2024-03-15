import { useSelector } from 'react-redux';
import { ContainerData, HeaderContainer, Text } from './Header.styled';

export const Header = () => {
  const selectedBook = useSelector(state => state.selectedOption1);
  const selectedNumber = useSelector(state => state.selectedOption2);

  return (
    <HeaderContainer>
      <Text>Бесплатные тесты</Text>
      <ContainerData>
        <span>book: {selectedBook}</span>
        <span>tests: {selectedNumber}</span>
      </ContainerData>
    </HeaderContainer>
  );
};
