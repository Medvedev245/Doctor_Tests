import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: var(--iq-primary);
  height: 70px;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px 0 40px;

  //tablet
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    padding: 0 15px;
  }
`;

export const ImageContainer = styled.div`
  justify-content: flex-start;
  position: static;
  flex-direction: column;
  gap: 60px;
`;

export const Image = styled.img`
  /* display: flex; */
`;

export const Text = styled.p`
  /* margin-bottom: 15px; */
  font-size: 24px;
  font-weight: 500;

  // Mobil
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ContainerData = styled.nav`
  /* width: 200px; */
  display: flex;
  justify-content: space-between;
  gap: 20px;
  transition: opacity 0s ease, transform 0.3s ease; /* Добавляем transition для анимации */

  //tablet
  @media screen and (max-width: 1200px) {
    gap: 0px;
  }
  // Mobil
  @media screen and (max-width: 767px) {
    justify-content: start;
    z-index: 10;
    position: absolute;
    width: 40%;
    height: 100vh;
    top: 0;
    right: 0px;
    align-items: center;
    background-color: var(--iq-primary);
    flex-direction: column;
    gap: 20px;
    padding-top: 50px;
    pointer-events: ${props =>
      props.isOpen ? 'auto' : 'none'}; /* Позволяет кликать, если открыто */
    opacity: ${props =>
      props.isOpen ? '1' : '0'}; /* Устанавливаем прозрачность */
    transform: translateY(
      ${props => (props.isOpen ? '0' : '-110%')}
    ); /* Смещаем меню вниз, если открыто */
  }
`;

export const LinkLogo = styled(NavLink)`
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const LinkElement = styled(NavLink)`
  text-align: center;
  width: 90px;
  padding: 26px 0;
  text-decoration: none;
  color: black;
  height: 100%;
  &.active {
    transition: all 0.4s ease;
    background-color: rgba(204, 185, 228, 1);
  }

  &:hover,
  &:focus {
    background-color: var(--iq-secondary);

    transition: all 0.4s ease;
  }
  // Tablet
  @media screen and (max-width: 1200px) {
    width: 75px;
    font-size: 13px;
    padding: 28px 0;
    height: auto;
  }

  // Mobil
  @media screen and (max-width: 767px) {
    border-radius: 6px;
  }
`;
