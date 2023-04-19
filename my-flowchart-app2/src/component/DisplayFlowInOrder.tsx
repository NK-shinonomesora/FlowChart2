import React from "react";
import MyNode from "../class/MyNode";
import ProcessNode from "../class/ProcessNode";

interface DisplayFlowInOrderProp {
  node: MyNode
}

const DisplayFlowInOrder: React.FC<DisplayFlowInOrderProp> = ({ node }) => {
  return (
    <>
    <div className="confirm-flow-modal-text-box">
      <span className="box-title">フロー内容</span>
      <p>{node.getText()}</p>
    </div>
    <div className="confirm-flow-modal-detail-box">
      <span className="box-title">詳細</span>
      <p>
        { node instanceof ProcessNode && node.getDetail()}
      </p>
    </div>
    </>
  )
}

export default DisplayFlowInOrder;