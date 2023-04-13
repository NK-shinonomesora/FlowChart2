import React from "react";
import Modal from 'react-modal';
import DisplayFlowInOrder from "./DisplayFlowInOrder";
import MyNode from "../class/MyNode";
import BranchNode from "../class/BranchNode";

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
    <div>
      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={() => closeModal3()}
      >
        <DisplayFlowInOrder node={node} />
        {
          node.getParent() !== null
          &&
          <div>
            <button onClick={() => wrapDisplayedNode(node.getParent())}>back</button>
          </div>
        }
        {
          node.getChild() !== null
          &&
          <div>
            <button onClick={() => wrapDisplayedNode(node.getChild())}>next</button>
          </div>
        }
        {
          (node instanceof BranchNode && node.getChild2() !== null)
          &&
          <div>
            <button onClick={() => wrapDisplayedNode(node.getChild2())}>next2</button>
          </div>
        }
        <div>
          <button onClick={() => closeModal3()}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default ConfirmFlowModal;