import React from "react";
import MyNode from "../class/MyNode";
import ProcessNode from "../class/ProcessNode";
import BranchNode from "../class/BranchNode";

interface DisplayFlowInOrderProp {
  node: MyNode
}

const DisplayFlowInOrder: React.FC<DisplayFlowInOrderProp> = ({ node }) => {
  return (
    <>
    <div className="confirm-flow-modal-text-box">
      <span className="box-title">Content</span>
      <p>{node.getText()}</p>
    </div>
    <div className="confirm-flow-modal-detail-box">
      <span className="box-title">Detail</span>
      <pre>
        {node.getDetail()}
      </pre>
    </div>
    </>
  )
}

export default DisplayFlowInOrder;