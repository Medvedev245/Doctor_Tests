// import { useSelector } from 'react-redux';
import {
  ContainerData,
  HeaderContainer,
  Text,
  ImageContainer,
  Image,
} from './Header.styled';
import image from '../../Files/img/favicon-32x32.png';

export const Header = () => {
  // const selectedBook = useSelector(state => state.testsReducer.selectedOption1);
  // const selectedNumber = useSelector(
  //   state => state.testsReducer.selectedOption2
  // );
  // const elements2 = useSelector(state => state.testsReducer.selectedOption2);

  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src={image} alt="" />
        <Text>Lékařské Zkoušky Online</Text>
      </ImageContainer>
      <ContainerData>
        {/* <span>Selected base: {selectedBook}</span>
        <span>tests: {selectedNumber}</span> */}
      </ContainerData>
    </HeaderContainer>
  );
};
