import { createContext, ReactNode } from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';
interface ModalProviderProps {
  children: React.ReactNode;
}

interface ModalContextDefault {
  modal: boolean;
  handleToggleModal: (content: any) => void;
  modalContent: any;
}

const DefaultData: ModalContextDefault = {
  modal: false,
  handleToggleModal: (content: any) => {},
  modalContent: null,
};

export const ModalContext = createContext<ModalContextDefault>(DefaultData);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const { modal, handleToggleModal, modalContent } = useModal();
  const value = { modal, handleToggleModal, modalContent };
  return (
    <ModalContext.Provider value={value}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
