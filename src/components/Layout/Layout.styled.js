import styled from 'styled-components';

//main container
export const Container = styled.div`
  background-color: var(--iq-secondary);
`;

export const MainContainer = styled.main`
  min-height: 77vh;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  max-width: 1400px;
  //Tablet
  @media screen and (max-width: 1201px) {
    width: 768px;
  }

  // Mobil
  @media screen and (max-width: 800px) {
    width: 375px;
    font-size: 24px;
  }
`;
