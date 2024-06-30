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
  position: relative;
  padding: 60px 15px 30px 15px;
  border-radius: 12px;
  background-color: var(--iq-secondary);
  width: 75%;
  height: 700px;
  position: fixed; /* Фиксированная позиция */
  overflow: auto; /* Разрешить прокрутку при необходимости */
  @media screen and (max-width: 767px) {
    padding: 60px 30px 30px 30px;
    height: 550px;
  }
`;

export const SvgCloseBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 14px;
  top: 14px;
  cursor: pointer;

  svg {
    stroke-width: 1.5px;
    stroke: var(--iq-cross);
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Descr = styled.p`
  margin-bottom: 40px;
`;

export const Img = styled.img`
  // Mobil
  @media screen and (max-width: 767px) {
    width: 235px;
    height: 170px;
  }
`;
