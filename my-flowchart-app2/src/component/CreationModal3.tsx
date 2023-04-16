import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("root"));

interface CreationModal3Prop {
  modalIsOpen6: boolean
  closeModal6: () => void
  wrapSetNodeText: (text: string) => void
  setProcess: () => void
  setBranch: () => void
  wrapSetDetail: (detail: string) => void
  whichNode: "process" | "branch" | "noCheck";
  setYes: () => void
  setNo: () => void
}

const CreationModal3: React.FC<CreationModal3Prop> = (
  {
    modalIsOpen6,
    closeModal6,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetDetail,
    whichNode,
    setYes,
    setNo,
  }
) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen6}
        onRequestClose={() => closeModal6()}
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
        {
          whichNode === "branch"
          &&
          <div>
          <h3>YES/NOどちら側を子ノードに接続しますか?</h3>
          <span>YES</span>
          <input
            type="radio"
            name="node1"
            onClick={() => setYes()}
          >
          </input>
          <span>NO</span>
          <input
            type="radio"
            name="node1"
            onClick={() => setNo()}
          >
          </input>
        </div>
        }
        <div>
          <button onClick={() => closeModal6()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreationModal3;