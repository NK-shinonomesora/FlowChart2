import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("root"));

interface CreationModal4Prop {
  modalIsOpen7: boolean
  closeModal7: () => void
  wrapSetNodeText: (text: string) => void
  setProcess: () => void
  setBranch: () => void
  wrapSetDetail: (detail: string) => void
  whichNode: "process" | "branch" | "noCheck";
  setYes: () => void
  setNo: () => void
  setYes2: () => void
  setNo2: () => void
}

const CreationModal4: React.FC<CreationModal4Prop> = (
  {
    modalIsOpen7,
    closeModal7,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetDetail,
    whichNode,
    setYes,
    setNo,
    setYes2,
    setNo2,
  }
) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen7}
        onRequestClose={() => closeModal7()}
        contentLabel="Node作成"
      >
        <div>
          <h3>YES/NOどちら側から接続されますか?</h3>
          <span>YES</span>
          <input
            type="radio"
            name="node2"
            onClick={() => setYes2()}
          >
          </input>
          <span>NO</span>
          <input
            type="radio"
            name="node2"
            onClick={() => setNo2()}
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
          <button onClick={() => closeModal7()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreationModal4;