import styled from 'styled-components';
import backgroundImage from '../../Files/img/1111.jpg';

//main container
export const Container = styled.div`
  /* background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5); */
  background-color: var(--iq-secondary);
`;

export const MainContainer = styled.main`
  min-height: 77vh;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  max-width: 1400px;
  font-size: var(--font-size-desktop);

  //Tablet
  @media screen and (max-width: 1200px) {
    width: 768px;
    font-size: var(--font-size-tablet);
  }

  // Mobil
  @media screen and (max-width: 767px) {
    width: 315px;
    font-size: var(--font-size-mobile);
    padding: 40px 15px 0 15px;
  }
`;
