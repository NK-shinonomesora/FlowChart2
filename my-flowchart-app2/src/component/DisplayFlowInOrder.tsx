import React from "react";
import MyNode from "../class/MyNode";
import ProcessNode from "../class/ProcessNode";

interface DisplayFlowInOrderProp {
  node: MyNode
}

const DisplayFlowInOrder: React.FC<DisplayFlowInOrderProp> = ({ node }) => {
  return (
    <>
    <p>{node.getText()}</p>
    <p>
      { node instanceof ProcessNode && node.getDetail()}
    </p>
    </>
  )
}

export default DisplayFlowInOrder;