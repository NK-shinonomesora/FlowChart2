import React, { useEffect, useLayoutEffect } from "react";
import CustomHook from "../hook/CustomHook";
import '../style/App.css';
import CreationModal from "./CreationModal";
import CreationModal2 from "./CreationModal2";
import ConfirmFlowModal from "./ConfirmFlowModal";
import YesOrNoModal from "./YesOrNoModal";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";

const CreateFlowChart: React.FC = () => {
  const {
    nodes,
    modalIsOpen,
    modalIsOpen2,
    modalIsOpen3,
    modalIsOpen4,
    closeModal,
    closeModal3,
    closeModal4,
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
    setNo,
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
            key={i}
            draggable="true"
            onClick={() => openModal(node)}
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
          </div>
        ))
      }
    </div>
    </>
  )
}

export default CreateFlowChart;