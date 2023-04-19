import React from "react";
import Modal from 'react-modal';
import '../style/YesOrNoModal.css';

Modal.setAppElement(document.getElementById("root"));

interface YesOrNoModalProp {
  modalIsOpen4: boolean
  closeModal4: () => void
  setYes: () => void
  setNo: () => void
}

const YesOrNoModal: React.FC<YesOrNoModalProp> = (
  {
    modalIsOpen4,
    closeModal4,
    setYes,
    setNo,
  }
) => {
  return (
    <>
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '150px',
          left: '300px',
          // right: '100px',
          // bottom: '100px',
          border: '1px solid #ccc',
          // background: 'rgba(0, 234, 255, 0.75)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '20px',
          width: "800px",
          height: "300px",
        }
      }}
      isOpen={modalIsOpen4}
      onRequestClose={() => closeModal4()}
      contentLabel="Yes/No選択"
    >
      <div className="yes-or-no-modal-box">
        <div className="yes-or-no-modal-which-node-box">
          <h3>Yes/Noどちらに接続しますか?</h3>
          <div>
            <span>Yes</span>
            <input
              type="radio"
              name="test"
              onClick={() => setYes()}
            >
            </input>
            <span>No</span>
            <input
              type="radio"
              name="test"
              onClick={() => setNo()}
            >
            </input>
          </div>
        </div>
      </div>
      <div className="yes-or-no-modal-box2">
        <button onClick={() => closeModal4()}>決定</button>
      </div>
    </Modal>
    </>
  )
}

export default YesOrNoModal;