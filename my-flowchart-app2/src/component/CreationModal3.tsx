import React from "react";
import Modal from 'react-modal';
import '../style/CreationModal3.css';

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
      isOpen={modalIsOpen6}
      onRequestClose={() => closeModal6()}
      contentLabel="Node-Creation"
    >
      <div className="creation-modal3-box">
        <div className="creation-modal3-box-which-node-box">
          <h3>Select a Node</h3>
          <div>
            <span>Process Node</span>
            <input
              type="radio"
              name="node"
              onClick={() => setProcess()}
            >
            </input>
            <span>Branch Node</span>
            <input
              type="radio"
              name="node"
              onClick={() => setBranch()}
            >
            </input>
          </div>
        </div>
        <div className="creation-modal3-box-text-box">
          <input
            className="creation-modal3-box-text-field"
            type="text"
            placeholder="Enter a content。"
            onChange={(e) => wrapSetNodeText(e.target.value)}
          >
          </input>
        </div>
        {
          whichNode === "process"
          &&
          <div className="creation-modal3-box2-detail-box">
            <textarea
              className="creation-modal3-box-detail-field"
              placeholder="Enter a detail"
              onChange={(e) => wrapSetDetail(e.target.value)}
            >
            </textarea>
          </div>
        }
      </div>
      {
        whichNode === "branch"
        &&
        <div className="creation-modal3-box">
          <div className="creation-modal3-box-which-node-box">
            <h3>Which will be connected to the child Node, YES or NO side?</h3>
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
        </div>
      }
      <div className="creation-modal3-box2">
        <button onClick={() => closeModal6()}>Create</button>
      </div>
    </Modal>
  )
}

export default CreationModal3;