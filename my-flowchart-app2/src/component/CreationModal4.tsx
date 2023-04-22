import React from "react";
import Modal from 'react-modal';
import '../style/CreationModal4.css';

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
        isOpen={modalIsOpen7}
        onRequestClose={() => closeModal7()}
        contentLabel="Node-Creation"
      >
        <div className="creation-modal4-box">
          <div className="creation-modal4-box-which-node-box">
            <h3>Which will be connected to a new Node, YES or NO side?</h3>
            <div>
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
          <div className="creation-modal4-box-text-box">
            <input
              className="creation-modal4-box-text-field"
              type="text"
              placeholder="Enter a content"
              onChange={(e) => wrapSetNodeText(e.target.value)}
            >
            </input>
          </div>
          {
            whichNode === "process"
            &&
            <div className="creation-modal4-box2-detail-box">
              <textarea
                className="creation-modal4-box-detail-field"
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
          <div className="creation-modal4-box">
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
        <div className="creation-modal4-box2"> 
          <button onClick={() => closeModal7()}>Create</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreationModal4;