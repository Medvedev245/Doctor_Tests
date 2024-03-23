import styled from 'styled-components';

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  padding: 60px 30px 0 30px;
  border-radius: 12px;
  background-color: wheat;
  width: 75%;
  height: 500px;
  position: fixed; /* Фиксированная позиция */
  overflow: auto; /* Разрешить прокрутку при необходимости */
`;
