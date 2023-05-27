import React from 'react';
import {Background, PopUpContainer, CloseButton} from './style';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Background>
      <PopUpContainer>
        {children}
        <CloseButton onClick={onClose}>
          Close
        </CloseButton>
      </PopUpContainer>
    </Background>
  );
};

export default Modal;