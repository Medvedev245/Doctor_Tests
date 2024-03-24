import React from 'react';

import {
  Descr,
  ModalContainer,
  ModalContent,
  SvgCloseBtn,
  Text,
  Img,
} from './Modal.styled';

const Modal = ({ active, setActive, closeModal, props }) => {
  return (
    <>
      {active && (
        <ModalContainer onClick={() => closeModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <SvgCloseBtn type="button" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </SvgCloseBtn>

            <Text>{props.question}</Text>
            <Descr>{props.description}</Descr>
            <Img src={props.img} alt={props.question} />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
