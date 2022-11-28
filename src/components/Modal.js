import { Cancel } from "@mui/icons-material";
const Modal = ({ modalOpen, toggleModalOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          Modal
          <button className="icon-button" onClick={toggleModalOpen}>
            <Cancel />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
