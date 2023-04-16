import React, { useEffect, useLayoutEffect } from "react";
import CustomHook from "../hook/CustomHook";
import '../style/CreateFlowChart.css';
import CreationModal from "./CreationModal";
import CreationModal2 from "./CreationModal2";
import CreationModal3 from "./CreationModal3";
import CreationModal4 from "./CreationModal4";
import ConfirmFlowModal from "./ConfirmFlowModal";
import YesOrNoModal from "./YesOrNoModal";
import ChangeTextOfNodeModal from "./ChangeTextOfNodeModal";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";

const CreateFlowChart: React.FC = () => {
  const {
    nodes,
    modalIsOpen,
    modalIsOpen2,
    modalIsOpen3,
    modalIsOpen4,
    modalIsOpen5,
    modalIsOpen6,
    modalIsOpen7,
    closeModal,
    closeModal3,
    closeModal4,
    closeModal5,
    closeModal6,
    closeModal7,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetNodeText2,
    setProcess2,
    setBranch2,
    openModal,
    openModal3,
    showLinkNodes,
    unShowLinkNodes,
    linkNodes,
    displayedNode,
    wrapSetDisplayedNode,
    parentNode,
    setYes,
    setYes2,
    setNo,
    setNo2,
    wrapSetDetail,
    wrapSetDetail2,
    whichNode,
    whichNode2,
    wrapSetTitle,
    saveFlowChart,
    wrapSetTitleId,
    restoreFlowChart,
    titleId,
    title,
    displayContextMenu,
    nodeText,
    detail,
    changeTextOfNode,
    createNodeBetweenNodeAndNode,
  } = CustomHook();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    wrapSetTitleId(searchParams.getAll("id").join());
  }, []);

  useEffect(() => {
    restoreFlowChart();
  }, [titleId]);


  return (
    <>
    <Header />
    <div id="root">
      <CreationModal
        modalIsOpen={ modalIsOpen }
        closeModal={ closeModal }
        wrapSetNodeText={wrapSetNodeText}
        setProcess={setProcess}
        setBranch={setBranch}
        wrapSetDetail={wrapSetDetail}
        whichNode={whichNode}
      />
      <CreationModal2
        modalIsOpen2={ modalIsOpen2 }
        closeModal={ closeModal }
        wrapSetNodeText={wrapSetNodeText}
        setProcess={setProcess}
        setBranch={setBranch}
        wrapSetNodeText2={wrapSetNodeText2}
        setProcess2={setProcess2}
        setBranch2={setBranch2}
        parentNode={parentNode}
        wrapSetDetail={wrapSetDetail}
        whichNode={whichNode}
        wrapSetDetail2={wrapSetDetail2}
        whichNode2={whichNode2}
      />
      <CreationModal3
        modalIsOpen6={ modalIsOpen6 }
        closeModal6={ closeModal6 }
        wrapSetNodeText={wrapSetNodeText}
        setProcess={setProcess}
        setBranch={setBranch}
        wrapSetDetail={wrapSetDetail}
        whichNode={whichNode}
        setYes={setYes}
        setNo={setNo}
      />
      <CreationModal4
        modalIsOpen7={ modalIsOpen7 }
        closeModal7={ closeModal7 }
        wrapSetNodeText={wrapSetNodeText}
        setProcess={setProcess}
        setBranch={setBranch}
        wrapSetDetail={wrapSetDetail}
        whichNode={whichNode}
        setYes={setYes}
        setNo={setNo}
        setYes2={setYes2}
        setNo2={setNo2}
      />
      <ConfirmFlowModal 
        modalIsOpen3={modalIsOpen3}
        closeModal3={closeModal3}
        node={displayedNode}
        wrapDisplayedNode={wrapSetDisplayedNode}
      />
      <YesOrNoModal
        modalIsOpen4={modalIsOpen4}
        closeModal4={closeModal4}
        setYes={setYes}
        setNo={setNo}
      />
      <ChangeTextOfNodeModal
        modalIsOpen5={ modalIsOpen5 }
        closeModal5={ closeModal5 }
        nodeText={nodeText}
        detail={detail}
        wrapSetNodeText={wrapSetNodeText}
        wrapSetDetail={wrapSetDetail}
        whichNode={whichNode}
      />
    </div>
    <div>
      <button
        onClick={() => saveFlowChart()}
      >
        フローチャートを保存する
      </button>
    </div>
    <div>
      <button
        onClick={() => openModal3()}
      >
        フローを順に確認する
      </button>
    </div>
    <div>
      <input
        placeholder="タイトルを入力してください。"
        onChange={(e) => wrapSetTitle(e.target.value)}
        defaultValue={title}
      >
      </input>
    </div>
    <div id="flex-box">
      {
        nodes.map((node, i) => (
          <div
            id="event-box"
            key={i}
            draggable="true"
            onClick={() => openModal(node)}
            onContextMenu={() => displayContextMenu(`${i}`)}
            onMouseOver={() => showLinkNodes(node)}
            onMouseLeave={() => unShowLinkNodes(node)}
            onDragStart={(e) => e.dataTransfer.setData('text/plain', node.getId())}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = 'copy';
            }}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.items) {
                for (const item of e.dataTransfer.items) {
                  const { kind, type } = item
                  if (kind === 'file') {
                    // Do nothing - item is file
                  } else if (kind === 'string') {
                    if (type === 'text/plain') {
                      linkNodes(e.dataTransfer.getData(type), node);
                    }
                  }
                }
              }
            }}
          >
            {
              node.displayShape()
            }
            <div
              style={{ display: "none" }}
              id={`contextmenu${i}`}
              className="contextmenu"
            >
              <ul>
                  <li
                    onClick={() => changeTextOfNode(node)}
                  >テキストを変更する
                  </li>
                  <li
                    onClick={(e) => node.getStatus() === "created" ? createNodeBetweenNodeAndNode(node) : e.stopPropagation()}
                  >このノードと次のノードの間に新規作成する
                  </li>
                  <li>menu3</li>
              </ul>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default CreateFlowChart;