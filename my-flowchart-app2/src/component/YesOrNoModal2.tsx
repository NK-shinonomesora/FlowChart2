import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("root"));

interface YesOrNoModal2Prop {
  modalIsOpen8: boolean
  closeModal8: () => void
  setYes: () => void
  setNo: () => void
}

const YesOrNoModal2: React.FC<YesOrNoModal2Prop> = (
  {
    modalIsOpen8,
    closeModal8,
    setYes,
    setNo,
  }
) => {
  return (
    <>
    <Modal
      isOpen={modalIsOpen8}
      onRequestClose={() => closeModal8()}
      contentLabel="Yes/No選択"
    >
      <p>Yes/Noどちらを接続しますか?</p>
      <div>
      <span>Yes</span>
        <input
          type="radio"
          name="test"
          onClick={() => setYes()}
        >
        </input>
      </div>
      <div>
      <span>No</span>
        <input
          type="radio"
          name="test"
          onClick={() => setNo()}
        >
        </input>
      </div>
      <div>
        <button onClick={() => closeModal8()}>close</button>
      </div>
    </Modal>
    </>
  )
}

export default YesOrNoModal2;