import {
  ContainerData,
  HeaderContainer,
  Text,
  ImageContainer,
  Image,
} from './Header.styled';
import image from '../../Files/img/favicon-32x32.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src={image} alt="Lékařské Zkoušky Online" />
        <Text>Lékařské Zkoušky Online</Text>
      </ImageContainer>
      <ContainerData>
        <Link to="/">Home</Link>
        {/* <Link to="alltests">alltests</Link> */}
      </ContainerData>
    </HeaderContainer>
  );
};
