import React, { useEffect } from "react";
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
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { SiQuicklook } from "react-icons/si";
import { RiInsertColumnRight } from "react-icons/ri";

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
    unDisplayContextMenu,
    message,
    color,
    background,
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
      message={message}
      color={color}
      background={background}
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
        Save
      </button>
    </div>
    <div id="title-input-box">
      <label id="title-label">Title</label>
      <input
        id="title-input-field"
        placeholder="Enter a title"
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
            onMouseOver={() => {
                displayContextMenu(`${i}`)
                showLinkNodes(node);
              }
            }
            onMouseLeave={() => {
                unDisplayContextMenu(`${i}`);
                unShowLinkNodes(node);
              }
            }
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
              {
                node.getStatus() === "notCreated"
                &&
                <p
                  onClick={() => {
                      openModal(node);
                    }
                  }
                ><AiOutlinePlusCircle size='1.2em'></AiOutlinePlusCircle>
                </p>
              }
              {
                node instanceof StartNode === false
                &&
                <p
                  onClick={() => {
                      changeTextOfNode(node);
                    }
                  }
                ><CiEdit size='1.2em'></CiEdit>
                </p>
              }
              {
                node.getStatus() === "created"
                &&
                <p
                  onClick={() => {
                      createNodeBetweenNodeAndNode(node);
                    }
                  }
                ><RiInsertColumnRight size='1.2em'></RiInsertColumnRight>
                </p>
              }
              {
                node instanceof StartNode === false
                &&
                <p
                  onClick={() => {
                      deleteNode(node);
                    }
                  }
                ><BsTrash size='1.2em'></BsTrash>
                </p>
              }
                <p
                  onClick={() => {
                      openModal3(node);
                    }
                  }
                ><SiQuicklook size='1.2em'></SiQuicklook>
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