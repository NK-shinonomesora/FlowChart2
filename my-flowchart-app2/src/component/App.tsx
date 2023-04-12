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
    unShowLinkNodes,
    linkNodes,
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

export default App;