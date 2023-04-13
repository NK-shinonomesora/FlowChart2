import React from "react";
import Modal from 'react-modal';
import MyNode from "../class/MyNode";
import BranchNode from "../class/BranchNode";

Modal.setAppElement(document.getElementById("root"));

interface CreationModal2Prop {
  modalIsOpen2: boolean
  closeModal: () => void
  wrapSetNodeText: (text: string) => void
  setProcess: () => void
  setBranch: () => void
  wrapSetNodeText2: (text: string) => void
  setProcess2: () => void
  setBranch2: () => void
  parentNode: MyNode
  wrapSetDetail: (detail: string) => void
  whichNode: "process" | "branch" | "noCheck"
  wrapSetDetail2: (detail: string) => void
  whichNode2: "process" | "branch" | "noCheck"
}

const CreationModal2: React.FC<CreationModal2Prop> = (
  {
    modalIsOpen2,
    closeModal,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetNodeText2,
    setProcess2,
    setBranch2,
    parentNode,
    wrapSetDetail,
    wrapSetDetail2,
    whichNode,
    whichNode2,
  }
) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={() => closeModal()}
        contentLabel="Node作成"
      >
        {
          (parentNode !== undefined && parentNode.getChild() === null)
          &&
          <>
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
          <h1>Yes側ノードについて</h1>
          <div>
            <input
              type="text"
              placeholder="フローの内容を入力してください。"
              onChange={(e) => wrapSetNodeText(e.target.value)}
            >
            </input>
          </div>
          </>
        }
        {
          (parentNode !== undefined && parentNode.getChild() === null)
          && (whichNode === "process")
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
          (parentNode !== undefined && parentNode instanceof BranchNode && (parentNode as BranchNode).getChild2() === null)
          &&
          <>
          <div>
            <h3>作成したいノードは?</h3>
            <span>処理ノード</span>
            <input
              type="radio"
              name="node2"
              onClick={() => setProcess2()}
            >
            </input>
            <span>分岐ノード</span>
            <input
              type="radio"
              name="node2"
              onClick={() => setBranch2()}
            >
            </input>
          </div>
          <h1>No側ノードについて</h1>
          <div>
            <input
              type="text"
              placeholder="フローの内容を入力してください。"
              onChange={(e) => wrapSetNodeText2(e.target.value)}
            >
            </input>
          </div>
          </>
        }
        {
          (parentNode !== undefined && parentNode instanceof BranchNode && (parentNode as BranchNode).getChild2() === null)
          && (whichNode2 === "process")
          &&
          <div>
            <textarea
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail2(e.target.value)}
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

export default CreationModal2;