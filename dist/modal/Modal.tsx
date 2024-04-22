import "./Modal.css";

export const Modal = ({
  message,
  isOpen,
  handleCloseModal,
}: {
  message: string;
  isOpen: boolean;
  handleCloseModal: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-dialog">
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <p className="modal-message">{message}</p>
            <button className="modal-cross" onClick={handleCloseModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};
