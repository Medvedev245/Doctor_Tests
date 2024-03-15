import { ContainerData, HeaderContainer, Text } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Text>Бесплатные тесты</Text>
      <ContainerData>
        <span>book</span>
        <span>tests</span>
      </ContainerData>
    </HeaderContainer>
  );
};
