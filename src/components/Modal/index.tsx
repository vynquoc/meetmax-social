import React, { ReactNode, useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModalContext } from '../../contexts/modalContext/ModalContext';
import { BiXCircle } from 'react-icons/bi';
import './style.scss';

const Modal = () => {
  const { modal, handleToggleModal, modalContent } = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className="modal-container">
        <div className="content-container">
          <button className="close-modal-button" onClick={() => handleToggleModal(null)}>
            <BiXCircle className="close-icon" />
          </button>
          <div className="modal-content">{modalContent}</div>
        </div>
      </div>,
      document.querySelector('#modal-root')!
    );
  } else {
    return null;
  }
};

export default Modal;
