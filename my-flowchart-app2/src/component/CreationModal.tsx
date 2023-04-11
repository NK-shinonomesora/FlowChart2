import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("root"));

interface CreationModalProp {
  modalIsOpen: boolean
  closeModal: () => void
  wrapSetNodeText: (text: string) => void
  setProcess: () => void
  setBranch: () => void
}

const CreationModal: React.FC<CreationModalProp> = (
  {
    modalIsOpen,
    closeModal,
    wrapSetNodeText,
    setProcess,
    setBranch
  }
) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Node作成"
      >
        <div>
          <input
            type="text"
            placeholder="フローの内容を入力してください。"
            onChange={(e) => wrapSetNodeText(e.target.value)}
          >
          </input>
        </div>
        <div>
          <h3>作成したいノードは?</h3>
          <span>処理ノード</span>
          <input
            type="radio"
            name="node"
            onClick={() => setProcess()}
          >
          </input>
          <span>分岐ノード</span>
          <input
            type="radio"
            name="node"
            onClick={() => setBranch()}
          >
          </input>
        </div>
        <div>
          <button onClick={() => closeModal()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreationModal;