import React from "react";
import MyNode from "../class/MyNode";

interface DisplayFlowInOrderProp {
  node: MyNode
}

const DisplayFlowInOrder: React.FC<DisplayFlowInOrderProp> = ({ node }) => {
  return (
    <p>{node.getText()}</p>
  )
}

export default DisplayFlowInOrder;