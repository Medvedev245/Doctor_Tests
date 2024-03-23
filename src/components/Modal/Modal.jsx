import React from 'react';

import { ModalContainer, ModalContent } from './Modal.styled';

const Modal = ({ active, setActive, closeModal, props }) => {
  console.log(props);
  return (
    <>
      {active && (
        <ModalContainer onClick={() => closeModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <h2>{props.question}</h2>
            <p>{props.description}</p>
            <img src={props.img} alt={props.question} />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
