import React from "react";
import Modal from 'react-modal';
import MyNode from "../class/MyNode";
import BranchNode from "../class/BranchNode";
import '../style/CreationModal2.css'

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
        height: "800px",
      }
    }}
      isOpen={modalIsOpen2}
      onRequestClose={() => closeModal()}
      contentLabel="Node作成"
    >
      {
        (parentNode !== undefined && parentNode.getChild() === null)
        &&
        <>
        <div className="creation-modal2-box">
          <div className="creation-modal2-box-which-node-box">
            <h3>YES側に作成したいノードは?</h3>
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
          <div className="creation-modal2-box-text-box">
            <input
              className="creation-modal2-box-text-field"
              type="text"
              placeholder="フローの内容を入力してください。"
              onChange={(e) => wrapSetNodeText(e.target.value)}
            >
            </input>
          </div>
        </div>
        </>
      }
      {
        (parentNode !== undefined && parentNode.getChild() === null)
        && (whichNode === "process")
        &&
        <div className="creation-modal2-box2">
          <div className="creation-modal2-box2-detail-box">
            <textarea
              className="creation-modal2-box-detail-field"
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        </div>
      }
      {
        (parentNode !== undefined && parentNode instanceof BranchNode && (parentNode as BranchNode).getChild2() === null)
        &&
        <>
        <div className="creation-modal2-box">
          <div className="creation-modal2-box-which-node-box">
            <h3>No側に作成したいノードは?</h3>
            <div>
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
          </div>
          <div className="creation-modal2-box-text-box">
            <input
              className="creation-modal2-box-text-field"
              type="text"
              placeholder="フローの内容を入力してください。"
              onChange={(e) => wrapSetNodeText2(e.target.value)}
            >
            </input>
          </div>
        </div>
        </>
      }
      {
        (parentNode !== undefined && parentNode instanceof BranchNode && (parentNode as BranchNode).getChild2() === null)
        && (whichNode2 === "process")
        &&
        <div className="creation-modal2-box2">
          <div className="creation-modal2-box2-detail-box">
            <textarea
              className="creation-modal2-box-detail-field"
              placeholder="フローの詳細を記載する場合はここへ。"
              onChange={(e) => wrapSetDetail2(e.target.value)}
            >
            </textarea>
          </div>
        </div>
      }
      <div className="creation-modal2-box2">
        <div>
          <button onClick={() => closeModal()}>登録</button>
        </div>
      </div>
    </Modal>
  )
}

export default CreationModal2;