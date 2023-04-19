import React from "react";
import Modal from 'react-modal';
import DisplayFlowInOrder from "./DisplayFlowInOrder";
import MyNode from "../class/MyNode";
import BranchNode from "../class/BranchNode";
import '../style/ConfirmFlowModal.css';

Modal.setAppElement(document.getElementById("root"));

interface ConfirmFlowModalProp {
  modalIsOpen3: boolean
  closeModal3: () => void
  node: MyNode
  wrapDisplayedNode: (node: MyNode) => void
}

const ConfirmFlowModal: React.FC<ConfirmFlowModalProp> = (
  {
    modalIsOpen3,
    closeModal3,
    node,
    wrapDisplayedNode
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
        top: '60px',
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
        height: "700px",
      }
    }}
      isOpen={modalIsOpen3}
      onRequestClose={() => closeModal3()}
    >
      <div className="confirm-flow-modal-box">
        <DisplayFlowInOrder node={node} />
        <div className="confirm-flow-modal-button-box">
          {
            node.getParent() !== null
            &&
            <div>
              <button onClick={() => wrapDisplayedNode(node.getParent())}>BACK</button>
            </div>
          }
          {
            node.getChild() !== null
            &&
            <div>
              <button onClick={() => wrapDisplayedNode(node.getChild())}>NEXT（YES）</button>
            </div>
          }
          {
            (node instanceof BranchNode && node.getChild2() !== null)
            &&
            <div>
              <button onClick={() => wrapDisplayedNode(node.getChild2())}>NO</button>
            </div>
          }
          <div className="a">
            <button onClick={() => closeModal3()}>CLOSE</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmFlowModal;