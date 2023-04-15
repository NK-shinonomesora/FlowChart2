import React from "react";
import Modal from 'react-modal';

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
    <div>
      <Modal
        isOpen={modalIsOpen5}
        onRequestClose={() => closeModal5()}
        contentLabel="Node作成"
      >
        <div>
          <input
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
          <div>
            <textarea
              defaultValue={detail}
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        }
        <div>
          <button onClick={() => closeModal5()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default ChangeTextOfNodeModal;