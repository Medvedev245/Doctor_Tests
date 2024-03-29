import {
  ContainerData,
  HeaderContainer,
  Text,
  ImageContainer,
  Image,
  LinkElement,
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
        <LinkElement to="/">MainPage</LinkElement>
        <LinkElement to="page">Take a tests</LinkElement>
        <LinkElement to="AllTests">All Tests</LinkElement>
        <LinkElement to="video">Video</LinkElement>
      </ContainerData>
    </HeaderContainer>
  );
};
