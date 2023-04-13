import React from "react";
import Modal from 'react-modal';

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
      isOpen={modalIsOpen4}
      onRequestClose={() => closeModal4()}
      contentLabel="Yes/No選択"
    >
      <p>Yes/Noどちらに接続しますか?</p>
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
        <button onClick={() => closeModal4()}>close</button>
      </div>
    </Modal>
    </>
  )
}

export default YesOrNoModal;