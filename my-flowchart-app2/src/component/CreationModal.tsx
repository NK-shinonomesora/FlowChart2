import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("root"));

interface CreationModalProp {
  modalIsOpen: boolean
  closeModal: () => void
  wrapSetNodeText: (text: string) => void
  setProcess: () => void
  setBranch: () => void
  wrapSetDetail: (detail: string) => void
  whichNode: "process" | "branch" | "noCheck";
}

const CreationModal: React.FC<CreationModalProp> = (
  {
    modalIsOpen,
    closeModal,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetDetail,
    whichNode,
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
          <input
            type="text"
            placeholder="フローの内容を入力してください。"
            onChange={(e) => wrapSetNodeText(e.target.value)}
          >
          </input>
        </div>
        {
          whichNode === "process"
          &&
          <div>
            <textarea
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        }
        <div>
          <button onClick={() => closeModal()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreationModal;