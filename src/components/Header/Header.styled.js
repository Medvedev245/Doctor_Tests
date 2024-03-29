import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: var(--iq-primary);
  height: 70px;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px 0 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
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

  // Mobil
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: black;
`;
