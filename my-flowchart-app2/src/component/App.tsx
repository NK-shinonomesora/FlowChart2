import React from "react";
import CustomHook from "../hook/CustomHook";
import '../style/App.css';
import CreationModal from "./CreationModal";
import CreationModal2 from "./CreationModal2";

const App: React.FC = () => {
  const {
    nodes,
    modalIsOpen,
    modalIsOpen2,
    closeModal,
    wrapSetNodeText,
    setProcess,
    setBranch,
    wrapSetNodeText2,
    setProcess2,
    setBranch2,
    openModal,
    showLinkNodes,
    unShowLinkNodes
  } = CustomHook();

  return (
    <>
    <div id="root">
      <CreationModal
        modalIsOpen={ modalIsOpen }
        closeModal={ closeModal }
        wrapSetNodeText={wrapSetNodeText}
        setProcess={setProcess}
        setBranch={setBranch}
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
      />
    </div>
    <div id="flex-box">
      {
        nodes.map((node, i) => (
          <div
            onClick={() => openModal(node)}
            onMouseOver={() => showLinkNodes(node)}
            onMouseLeave={() => unShowLinkNodes(node)}
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

export default App;