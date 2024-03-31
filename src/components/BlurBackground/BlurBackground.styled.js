import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; // Изменено на position: fixed
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(17px);
  z-index: 1;
`;
