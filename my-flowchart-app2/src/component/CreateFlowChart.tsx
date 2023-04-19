import React, { useEffect, useLayoutEffect } from "react";
import CustomHook from "../hook/CustomHook";
import '../style/CreateFlowChart.css';
import CreationModal from "./CreationModal";
import CreationModal2 from "./CreationModal2";
import CreationModal3 from "./CreationModal3";
import CreationModal4 from "./CreationModal4";
import ConfirmFlowModal from "./ConfirmFlowModal";
import YesOrNoModal from "./YesOrNoModal";
import YesOrNoModal2 from "./YesOrNoModal2";
import ChangeTextOfNodeModal from "./ChangeTextOfNodeModal";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";
import StartNode from "../class/StartNode";
import Message from "./Message";

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
    modalIsOpen8,
    closeModal,
    closeModal3,
    closeModal4,
    closeModal5,
    closeModal6,
    closeModal7,
    closeModal8,
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
    deleteNode,
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
    <div id="root">
    <Header />
    <Message 
      successMessage={`保存に成功しました。`}
      errorMessage={`保存に失敗しました。もう一度、保存ボタンをクリックしてみてください。`}
    />
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
      <YesOrNoModal2
        modalIsOpen8={modalIsOpen8}
        closeModal8={closeModal8}
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
    <div>
      <button
        id="save-button"
        onClick={() => saveFlowChart()}
      >
        保存
      </button>
    </div>
    <div id="title-input-box">
      <label id="title-label">Title</label>
      <input
        id="title-input-field"
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
                <p
                  onClick={(e) => {
                      e.stopPropagation();
                      displayContextMenu(`${i}`);
                      changeTextOfNode(node);
                    }
                  }
                >Edit Text
                </p>
                <p
                  onClick={(e) => {
                      e.stopPropagation();
                      displayContextMenu(`${i}`);
                      node.getStatus() === "created" && createNodeBetweenNodeAndNode(node);
                    }
                  }
                >Insert Node
                </p>
                <p
                  onClick={(e) => {
                      e.stopPropagation();
                      displayContextMenu(`${i}`);
                      node instanceof StartNode === false && deleteNode(node);
                    }
                  }
                >Delete Nodes
                </p>
                <p
                  onClick={(e) => {
                      e.stopPropagation();
                      displayContextMenu(`${i}`);
                      openModal3(node);
                    }
                  }
                >Confirm Flow from here
                </p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default CreateFlowChart;