import React from "react";
import Header from "./Header";
import '../style/Usage.css';
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { SiQuicklook } from "react-icons/si";
import { RiInsertColumnRight } from "react-icons/ri";

const Usage: React.FC = () => {
  return (
    <>
    <Header />
    <div>
      <div className="what-is-this-app">
        <h1>How to use</h1>
      </div>
      <div className="usage-box">
        <ol>
          <li>Starting this app, you are in the Title Page and see almost blank screen.</li>
          <li>Moving to the Create Page, you can create a new flowchart.</li>
          <li>First, enter a favorite title of flowchart.</li>
          <li>Next, create a Process Node or Branch Node from Start Node. Hovering a Node, some icons are displayed. Each icons has the following role.</li>
          <li><AiOutlinePlusCircle></AiOutlinePlusCircle> is to create a new Process Node or Branch Node.</li>
          <li><CiEdit></CiEdit> is to edit a content and detail of the Node.</li>
          <li><RiInsertColumnRight></RiInsertColumnRight> is to insert a new Node between the hovered Node and next.</li>
          <li><BsTrash></BsTrash> is to delete the all Nodes that are connected from the hovered Node.</li>
          <li><SiQuicklook></SiQuicklook> is to confirm a flowchart in order from the hovered Node.</li>
          <li>As an option, try to drag and drop from a Node to other. They are connected. This is useful that you want to delete Nodes among flowchart or connect to a previous Node.</li>
          <li>Finally, don't forget to click a save-button at right bottom.</li>
          <li>Moving to the Title Page, you can see the saved title. Clicking a title-box, you can confirm and update the flowchart. A trash-icon deletes it.</li>
        </ol>
      </div>
    </div>
    </>
  )
}

export default Usage;