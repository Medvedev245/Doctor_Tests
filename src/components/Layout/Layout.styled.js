import styled from 'styled-components';

//main container
export const Container = styled.div`
  background-color: var(--iq-secondary);
`;

export const MainContainer = styled.main`
  min-height: 87vh;
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
