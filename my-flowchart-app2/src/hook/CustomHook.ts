import { useState } from "react";
import MyNode from "../class/MyNode";
import StartNode from "../class/StartNode";
import ProcessNode from "../class/ProcessNode";
import BranchNode from "../class/BranchNode";
import { Color } from "../enum/Color";

const CustomHook = () => {
  const [nodes, setNodes] = useState<MyNode[]>([new StartNode(null, "開始")]);
  const [parentNode, setParentNode] = useState<MyNode>();
  const [tempNode, setTempNode] = useState<MyNode>();
  const [displayedNode, setDisplayedNode] = useState<MyNode>(nodes[0]);
  const [saveNodes, setSaveNodes] = useState<MyNode[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpen5, setIsOpen5] = useState(false);
  const [modalIsOpen6, setIsOpen6] = useState(false);
  const [modalIsOpen7, setIsOpen7] = useState(false);
  const [nodeText, setNodeText] = useState<string>("");
  const [nodeText2, setNodeText2] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [detail2, setDetail2] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleId, setTitleId] = useState<string>("");
  const [whichNode, setWhichNode] = useState<"process" | "branch" | "noCheck">("noCheck");
  const [whichNode2, setWhichNode2] = useState<"process" | "branch" | "noCheck">("noCheck");
  const [yesOrNo, setYesOrNo] = useState<"yes" | "no" | "noCheck">("noCheck");
  const [yesOrNo2, setYesOrNo2] = useState<"yes" | "no" | "noCheck">("noCheck");

  const resetStates = () => {
    setNodeText("");
    setNodeText2("");
    setDetail("");
    setDetail2("");
    setWhichNode("noCheck");
    setWhichNode2("noCheck");
    setYesOrNo("noCheck");
  }

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

  const setYes = () => {
    setYesOrNo("yes");
  }

  const setNo = () => {
    setYesOrNo("no");
  }

  const setYes2 = () => {
    setYesOrNo2("yes");
  }

  const setNo2 = () => {
    setYesOrNo2("no");
  }

  const openModal = (node: MyNode) => {
    if(node.getStatus() === "created") return;
    setParentNode(node);
    if(node instanceof BranchNode) {
      setIsOpen2(true);
    } else {
      setIsOpen(true);
    }
  }

  const openModal3 = () => {
    setDisplayedNode(nodes[0]);
    setIsOpen3(true);
  }

  const openModal4 = () => {
    setIsOpen4(true);
  }

  const openModal5 = () => {
    setIsOpen5(true);
  }

  const openModal6 = () => {
    setIsOpen6(true);
  }

  const openModal7 = () => {
    setIsOpen7(true);
  }
  
  const closeModal = () => {
    const isBranch = parentNode instanceof BranchNode;
    if(isBranch) {
      // どちらか片方でもチェックしていればtrue
      if(whichNode !== "noCheck" || whichNode2 !== "noCheck") {
        const [newNode, newNode2] = createNode2();
        changePropertyOfParentNode2(newNode, newNode2);
        setWhichNode("noCheck");
        setWhichNode2("noCheck");
      }
    } else {
      if(whichNode !== "noCheck") {
        const newNode = createNode();
        changePropertyOfParentNode(newNode);
        setWhichNode("noCheck");
      }
    }
    isBranch ? setIsOpen2(false) : setIsOpen(false);
    resetStates();
  }

  const closeModal3 = () => {
    setDisplayedNode(nodes[0]);
    setIsOpen3(false);
    resetStates();
  }

  const closeModal4 = () => {
    const [node, targetNode] = saveNodes;
    if(yesOrNo === "noCheck") {
      return;
    } else if(yesOrNo === "yes") {
      node.setChild(targetNode);
    } else {
      (node as BranchNode).setChild2(targetNode);
    }
    setIsOpen4(false);
    resetStates();
  }

  const closeModal5 = () => {
    setIsOpen5(false);
    tempNode.setText(nodeText);
    if(tempNode instanceof ProcessNode) tempNode.setDetail(detail);
    setNodes(nodes.concat());
    resetStates();
  }

  const closeModal6 = () => {
    if(whichNode !== "noCheck") {
      const newNode = createNode();
      if(newNode instanceof ProcessNode) {
        newNode.setChild(parentNode.getChild());
        newNode.setStatus("created");
        parentNode.setChild(newNode);
        newNode.getChild().setParent(newNode);
      } else {
        if(yesOrNo === "yes") {
          newNode.setChild(parentNode.getChild());
          parentNode.setChild(newNode);
          newNode.getChild().setParent(newNode);
        } else {
          (newNode as BranchNode).setChild2(parentNode.getChild());
          parentNode.setChild(newNode);
          (newNode as BranchNode).getChild2().setParent(newNode);
        }
      }
    }
    setIsOpen6(false);
    resetStates();
  }

  const closeModal7 = () => {
    if(whichNode !== "noCheck") {
      const newNode = createNode();
      if(newNode instanceof ProcessNode) {
        if(yesOrNo2 === "yes") {
          newNode.setChild(parentNode.getChild());
          newNode.setStatus("created");
          parentNode.setChild(newNode);
          newNode.getChild().setParent(newNode);
        } else {
          newNode.setChild((parentNode as BranchNode).getChild2());
          newNode.setStatus("created");
          (parentNode as BranchNode).setChild2(newNode);
          newNode.getChild().setParent(newNode);
        }
      } else {
        if(yesOrNo2 === "yes") {
          if(yesOrNo === "yes") {
            newNode.setChild(parentNode.getChild());
            parentNode.setChild(newNode);
            newNode.getChild().setParent(newNode);
          } else {
            (newNode as BranchNode).setChild2(parentNode.getChild());
            parentNode.setChild(newNode);
            (newNode as BranchNode).getChild2().setParent(newNode);
          }
        } else {
          if(yesOrNo === "yes") {
            newNode.setChild((parentNode as BranchNode).getChild2());
            (parentNode as BranchNode).setChild2(newNode);
            newNode.getChild().setParent(newNode);
          } else {
            (newNode as BranchNode).setChild2((parentNode as BranchNode).getChild2());
            (parentNode as BranchNode).setChild2(newNode);
            (newNode as BranchNode).getChild2().setParent(newNode);
          }
        }
      }
    }
    setIsOpen7(false);
    resetStates();
  }

  const wrapSetNodeText = (text: string) => {
    setNodeText(text);
  }

  const wrapSetNodeText2 = (text: string) => {
    setNodeText2(text);
  }

  const wrapSetDisplayedNode = (node: MyNode) => {
    setDisplayedNode(node);
  }

  const wrapSetDetail = (detail: string) => {
    setDetail(detail);
  }

  const wrapSetDetail2 = (detail: string) => {
    setDetail2(detail);
  }

  const wrapSetTitle = (title: string) => {
    setTitle(title);
  }

  const wrapSetTitleId = (id: string) => {
    setTitleId(id);
  }

  const createNode = () => {
    const newNode = whichNode === "process"
    ? ProcessNode.createNode(parentNode, nodeText, detail)
    : BranchNode.createNode(parentNode, nodeText);
    setNodes(nodes.concat(newNode));
    return newNode;
  }

  const createNode2 = () => {
    let newNode: MyNode | null;
    let newNode2: MyNode | null;
    if(whichNode !== "noCheck") {
      newNode = whichNode === "process"
      ? ProcessNode.createNode(parentNode, nodeText, detail) 
      : BranchNode.createNode(parentNode, nodeText);
    } else {
      newNode = null;
    }
    if(whichNode2 !== "noCheck") {
      newNode2 = whichNode2 === "process"
      ? ProcessNode.createNode(parentNode, nodeText2, detail2) 
      : BranchNode.createNode(parentNode, nodeText2);
    } else {
      newNode2 = null;
    }
    // nullではないNodeだけnodesに追加する
    if(newNode !== null && newNode2 !== null) {
      setNodes(nodes.concat([newNode, newNode2]));
    } else if(newNode !== null && newNode2 === null) {
      setNodes(nodes.concat(newNode));
    } else if(newNode === null && newNode2 !== null) {
      setNodes(nodes.concat(newNode2));
    }
    return [newNode, newNode2];
  }

  const changePropertyOfParentNode = (newNode: MyNode) => {
    parentNode.setStatus("created");
    parentNode.setChild(newNode);
  }

  const changePropertyOfParentNode2 = (newNode: MyNode | null, newNode2: MyNode | null) => {
    newNode !== null && parentNode.setChild(newNode);
    newNode2 !== null && (parentNode as BranchNode).setChild2(newNode2);
    if(parentNode.getChild() !== null && (parentNode as BranchNode).getChild2() !== null) {
      parentNode.setStatus("created");
    }
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
      if(node.getChild() === null && node.getChild2() !== null)  {
        node.setChild(targetNode);
        node.setStatus("created");
      } else if(node.getChild() !== null && node.getChild2() === null) {
        node.setChild2(targetNode);
        node.setStatus("created");
      // Yes/No両方ともnullの場合
      } else {
        setSaveNodes([node, targetNode]);
        openModal4();
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

  const saveFlowChart = async () => {
    if(titleId === "") {
      await window.myAPI.saveFlowChart(title, nodes);
    } else {
      await window.myAPI.updateFlowChart(title, titleId, nodes);
    }
  }

  const findStartNode = (nodes: NodePropertyAfterSavedToDB[]) => {
    let node: NodePropertyAfterSavedToDB;
    for(let i = 0; i < nodes.length; i++) {
      if(nodes[i].type === "start") {
        node = nodes[i];
        break;
      }
    }
    return node;
  }

  const findNodeById = (id: string, newNodes: MyNode[]) => {
    let node: MyNode | null = null;
    for(let i = 0; i < newNodes.length; i++) {
      if(newNodes[i].getId() === id) {
        node = newNodes[i];
        break;
      }
    }
    return node;
  }
 
  const findNodeInfoById = (id: string, nodes: NodePropertyAfterSavedToDB[]) => {
    let node: NodePropertyAfterSavedToDB;
    for(let i = 0; i < nodes.length; i++) {
      if(nodes[i].id === id) {
        node = nodes[i];
        break;
      }
    }
    return node;
  }

  const restoreFlowChartByDFS = (id: string, nodes: NodePropertyAfterSavedToDB[], newNodes: MyNode[], parent: MyNode | null = null) => {
    const findResult = findNodeById(id, newNodes)
    if(findResult !== null) return findResult;
    let newNode: MyNode;
    const nodeInfo = findNodeInfoById(id, nodes);
    if(nodeInfo.type === "start") {
      newNode = StartNode.restoreNode(nodeInfo);
      newNodes.push(newNode);
      if(nodeInfo.child !== "null") {
        const childNode = restoreFlowChartByDFS(nodeInfo.child, nodes, newNodes, newNode);
        newNode.setChild(childNode);
      }
    } else if(nodeInfo.type === "process") {
      newNode = ProcessNode.restoreNode(nodeInfo, parent);
      newNodes.push(newNode);
      if(nodeInfo.child !== "null") {
        const childNode = restoreFlowChartByDFS(nodeInfo.child, nodes, newNodes, newNode);
        newNode.setChild(childNode);
      }
    } else {
      newNode = BranchNode.restoreNode(nodeInfo, parent);
      newNodes.push(newNode);
      if(nodeInfo.child !== "null") {
        const childNode = restoreFlowChartByDFS(nodeInfo.child, nodes, newNodes, newNode);
        newNode.setChild(childNode);
      }
      if(nodeInfo.child2 !== "null") {
        const childNode2 = restoreFlowChartByDFS(nodeInfo.child2, nodes, newNodes, newNode);
        (newNode as BranchNode).setChild2(childNode2);
      }
    }

    return newNode;
  }

  const restoreFlowChart = async () => {
    if(titleId === "") return;
    const restoredTitle = await window.myAPI.selectTitleById(titleId);
    const restoredNodes = await window.myAPI.selectNodesByTitleId(titleId);
    const startNode = findStartNode(restoredNodes);
    let newNodes: MyNode[] = [];
    restoreFlowChartByDFS(startNode.id, restoredNodes, newNodes);
    setTitle(restoredTitle.title);
    setNodes(newNodes);
  }

  const displayContextMenu = (i: string) => {
    const elem = document.getElementById(`contextmenu${i}`);
    elem.style.display === "none" ? elem.style.display = "block" : elem.style.display = "none";
  }

  const changeTextOfNode = (node: MyNode) => {
    if(node instanceof StartNode) return;
    setTempNode(node);
    if(node instanceof ProcessNode) {
      setNodeText(node.getText());
      setDetail(node.getDetail());
      setWhichNode("process");
      openModal5();
    } else {
      setNodeText(node.getText());
      setWhichNode("branch");
      openModal5();
    }
  }

  const createNodeBetweenNodeAndNode = (node: MyNode) => {
    setParentNode(node);
    if(node instanceof ProcessNode) {
      openModal6();
    } else {
      openModal7();
    }
  }

  return {
    nodes,
    createNode,
    modalIsOpen,
    modalIsOpen2,
    modalIsOpen3,
    modalIsOpen4,
    modalIsOpen5,
    modalIsOpen6,
    modalIsOpen7,
    setProcess,
    setProcess2,
    setBranch,
    setBranch2,
    openModal,
    openModal3,
    closeModal,
    closeModal3,
    closeModal4,
    closeModal5,
    closeModal6,
    closeModal7,
    wrapSetNodeText,
    wrapSetNodeText2,
    wrapSetDetail,
    wrapSetDetail2,
    wrapSetTitle,
    wrapSetDisplayedNode,
    wrapSetTitleId,
    showLinkNodes,
    unShowLinkNodes,
    linkNodes,
    displayedNode,
    parentNode,
    setYes,
    setYes2,
    setNo,
    setNo2,
    whichNode,
    whichNode2,
    saveFlowChart,
    restoreFlowChart,
    titleId,
    title,
    displayContextMenu,
    nodeText,
    detail,
    changeTextOfNode,
    createNodeBetweenNodeAndNode,
  }
}

export default CustomHook;