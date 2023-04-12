import { useState } from "react";
import MyNode from "../class/MyNode";
import StartNode from "../class/StartNode";
import ProcessNode from "../class/ProcessNode";
import BranchNode from "../class/BranchNode";
import { Color } from "../enum/Color";

const CustomHook = () => {
  const [nodes, setNodes] = useState<MyNode[]>([new StartNode(null, "開始")]);
  const [parentNode, setParentNode] = useState<MyNode>();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [nodeText, setNodeText] = useState<string>("");
  const [nodeText2, setNodeText2] = useState<string>("");
  const [whichNode, setWhichNode] = useState<"process" | "branch">("process");
  const [whichNode2, setWhichNode2] = useState<"process" | "branch">("process");

  const setProcess = () => {
    setWhichNode("process");
  }

  const setProcess2 = () => {
    setWhichNode2("process");
  }

  const setBranch = () => {
    setWhichNode("branch");
  }

  const setBranch2 = () => {
    setWhichNode2("branch");
  }

  const openModal = (node: MyNode) => {
    if(node.getStatus() === "created") return;
    setParentNode(node);
    if(node instanceof BranchNode) {
      //linkを1つでも張っていたらNodeは作成できないこととする。
      if(node.getChild() !== null) return;
      setIsOpen2(true);
    } else {
      setIsOpen(true);
    }
  }
  
  const closeModal = () => {
    const isBranch = parentNode instanceof BranchNode;
    if(isBranch) {
      const [newNode, newNode2] = createNode2();
      changePropertyOfParentNode2(newNode, newNode2);
    } else  {
      const newNode = createNode();
      changePropertyOfParentNode(newNode);
    }
    isBranch ? setIsOpen2(false) : setIsOpen(false);
  }

  const wrapSetNodeText = (text: string) => {
    setNodeText(text);
  }

  const wrapSetNodeText2 = (text: string) => {
    setNodeText2(text);
  }

  const createNode = () => {
    const newNode = whichNode === "process"
    ? ProcessNode.createNode(parentNode, nodeText)
    : BranchNode.createNode(parentNode, nodeText);
    setNodes(nodes.concat(newNode));
    return newNode;
  }

  const createNode2 = () => {
    const newNode = whichNode === "process"
    ? ProcessNode.createNode(parentNode, nodeText) 
    : BranchNode.createNode(parentNode, nodeText);
    const newNode2 = whichNode2 === "process"
    ? ProcessNode.createNode(parentNode, nodeText2) 
    : BranchNode.createNode(parentNode, nodeText2);
    setNodes(nodes.concat([newNode, newNode2]));
    return [newNode, newNode2];
  }

  const changePropertyOfParentNode = (newNode: MyNode) => {
    parentNode.setStatus("created");
    parentNode.setChild(newNode);
  }

  const changePropertyOfParentNode2 = (newNode: MyNode, newNode2: MyNode) => {
    parentNode.setStatus("created");
    parentNode.setChild(newNode);
    (parentNode as BranchNode).setChild2(newNode2);
  }

  const showLinkNodes = (node: MyNode) => {
    if(node.getParent() !== null) node.getParent().setColor(Color.Parent);
    if(node.getChild() !== null) node.getChild().setColor(Color.Child);
    if(node instanceof BranchNode && node.getChild2() !== null) node.getChild2().setColor(Color.Child2);
    setNodes(nodes.concat());
  }

  const unShowLinkNodes = (node: MyNode) => {
    const parent = node.getParent();
    const child = node.getChild();
    if(parent !== null) {
      if(parent instanceof StartNode) {
        parent.setColor(Color.Start);
      } else if(parent instanceof ProcessNode) {
        parent.setColor(Color.Process);
      } else {
        parent.setColor(Color.Branch);
      }
    }
    if(child !== null) {
      if(child instanceof ProcessNode) {
        child.setColor(Color.Process);
      } else if(child instanceof BranchNode) {
        child.setColor(Color.Branch);
      }
    }
    if(node instanceof BranchNode &&  node.getChild2() !== null) {
      if(node.getChild2() instanceof ProcessNode) {
        node.getChild2().setColor(Color.Process);
      } else {
        node.getChild2().setColor(Color.Branch);
      }
    }
    setNodes(nodes.concat());
  }

  const linkNodes = (id: string, targetNode: MyNode) => {
    const node = getNodeById(id);
    if(node.getStatus() === "created") {
      //もし自分自身にドロップしたら子Nodeをnullにする
      if(targetNode.getId() === id) {
        node.setChild(null);
        node.setStatus("notCreated");
        if(node instanceof BranchNode) node.setChild2(null);
        return;
      } else {
        return;
      }
    } 
    if(node instanceof ProcessNode) {
      node.setChild(targetNode);
      node.setStatus("created");
    } else if(node instanceof BranchNode) {
      if(node.getChild() === null) {
        node.setChild(targetNode);
      } else {
        node.setChild2(targetNode);
        node.setStatus("created");
      }
    }
  }

  const getNodeById = (id: string) => {
    let node: MyNode;
    for(let i = 0; i < nodes.length; i++) {
      if(nodes[i].getId() === id) {
        node = nodes[i];
        break;
      }
    }
    return node;
  }

  return {
    nodes,
    createNode,
    modalIsOpen,
    modalIsOpen2,
    setProcess,
    setProcess2,
    setBranch,
    setBranch2,
    openModal,
    closeModal,
    wrapSetNodeText,
    wrapSetNodeText2,
    showLinkNodes,
    unShowLinkNodes,
    linkNodes,
  }
}

export default CustomHook;