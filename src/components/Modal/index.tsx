import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext/ModalContext';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = () => {
  const { modal, handleToggleModal, modalContent } = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal-container">
        <button onClick={() => handleToggleModal(modalContent)}>&times;</button>
        {modalContent}
      </div>,
      document.querySelector('#modal-root')!
    );
  } else {
    return null;
  }
};

export default Modal;
