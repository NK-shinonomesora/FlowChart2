import React from "react";
import Modal from 'react-modal';
import '../style/CreationModal.css'

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
          left: '400px',
          // right: '100px',
          // bottom: '100px',
          border: '1px solid #ccc',
          // background: 'rgba(0, 234, 255, 0.75)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '20px',
          width: "600px",
          height: "400px",
        }
      }}
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      contentLabel="Node作成"
    >
      <div id="creation-modal-box">
        <div id="creation-modal-box-which-node-box">
          <h2>作成したいノードは</h2>
          <div>
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
        </div>
        <div id="creation-modal-box-text-box">
          <input
            id="creation-modal-box-text-field"
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
              id="creation-modal-box-detail-field"
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        }
        <div>
          <button onClick={() => closeModal()}>作成</button>
        </div>
      </div>
    </Modal>
  )
}

export default CreationModal;