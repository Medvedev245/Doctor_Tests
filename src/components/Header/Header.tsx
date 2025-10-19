import {
  ContainerData,
  HeaderContainer,
  Text,
  ImageContainer,
  Image,
  LinkElement,
  LinkLogo,
} from './Header.styled';
import image from '../../Files/img/favicon-32x32.png';
import { useState } from 'react';
import { CLEAR_STATE } from 'store/testsReducer';
import { useDispatch } from 'react-redux';
import { BurgerComponent } from 'components/BurgerComponent/BurgerComponent';
import { BlurBackground } from 'components/BlurBackground/BlurBackground';
import { StyleSheetManager } from 'styled-components';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  // Проверяем, существует ли значение 'myCollection' в localStorage и извлекаем его
  const savedCollection = localStorage.getItem('myCollection');
  // Проверяем, существует ли значение 'myCollection' и не является ли оно null
  const choosenBase = savedCollection ? JSON.parse(savedCollection).length : 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const clearState = () => {
    closeMenu();
    dispatch(CLEAR_STATE());
  };

  return (
    <StyleSheetManager shouldForwardProp={prop => !['isOpen'].includes(prop)}>
      <HeaderContainer>
        <ImageContainer>
          <LinkLogo to="/">
            <Image src={image} alt="Lékařské Zkoušky Online" />
            <Text>Lékařské Zkoušky Online</Text>
          </LinkLogo>
        </ImageContainer>
        <BurgerComponent onClick={toggleMenu} isActive={isOpen} />
        <ContainerData isOpen={isOpen}>
          <LinkElement to="/" onClick={closeMenu}>
            Main Page
          </LinkElement>
          <LinkElement to="page" onClick={clearState}>
            Take a tests
          </LinkElement>
          <LinkElement to="AllTests" onClick={closeMenu}>
            All Tests
          </LinkElement>
          <LinkElement to="MyBase" onClick={closeMenu}>
            My Base <span style={{ color: 'blue' }}>({choosenBase})</span>
          </LinkElement>
          <LinkElement to="video" onClick={closeMenu}>
            Video
          </LinkElement>
        </ContainerData>
        {isOpen && <BlurBackground onClick={closeMenu} />}
      </HeaderContainer>
    </StyleSheetManager>
  );
};
