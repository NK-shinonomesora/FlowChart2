import React from "react";
import Modal from 'react-modal';
import '../style/ChangeTextOfNodeModal.css'

Modal.setAppElement(document.getElementById("root"));

interface ChangeTextOfNodeModalProp {
  modalIsOpen5: boolean
  closeModal5: () => void
  nodeText: string
  detail: string
  wrapSetNodeText: (text: string) => void
  wrapSetDetail: (detail: string) => void
  whichNode: "process" | "branch" | "noCheck";
}

const ChangeTextOfNodeModal: React.FC<ChangeTextOfNodeModalProp> = (
  {
    modalIsOpen5,
    closeModal5,
    nodeText,
    detail,
    wrapSetNodeText,
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
        top: '30px',
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
        height: "500px",
      }
    }}
      isOpen={modalIsOpen5}
      onRequestClose={() => closeModal5()}
      contentLabel="Node作成"
    >
      <div className="change-text-of-node-modal-box">
        <div className="change-text-of-node-modal-which-node-box">
          <h3>現在のフロー内容</h3>
        </div>
        <div className="change-text-of-node-modal-text-box">
          <input
            className="change-text-of-node-modal-box-text-field"
            defaultValue={nodeText}
            type="text"
            placeholder="フローの内容を入力してください。"
            onChange={(e) => wrapSetNodeText(e.target.value)}
          >
          </input>
        </div>
        {
          whichNode === "process"
          &&
          <div className="change-text-of-node-modal-detail-box">
            <textarea
              className="change-text-of-node-modal-box-detail-field"
              defaultValue={detail}
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        }
      </div>
      <div className="change-text-of-node-modal-box2">
        <button onClick={() => closeModal5()}>変更</button>
      </div>
    </Modal>
  )
}

export default ChangeTextOfNodeModal;