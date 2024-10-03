import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement(document.getElementById("root"));

const ImageModal = ({ modalState, modalIsOpen, onModalClose }) => {
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
