import React, { FC } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import css from "./ImageModal.module.css";
interface ModalState {
  src: string;
  alt: string;
}
interface ImageModalProps {
  modalState: ModalState;
  modalIsOpen: boolean;
  onModalClose: () => void;
}

const rootElement = Modal.setAppElement(document.getElementById("root") || "");

const ImageModal: FC<ImageModalProps> = ({
  modalState,
  modalIsOpen,
  onModalClose,
}) => {
  return (
    <div>
      <Modal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={modalIsOpen}
        onRequestClose={onModalClose}
      >
        <img
          className={css.modalImage}
          src={modalState.src}
          alt={modalState.alt}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
