import React from "react";
import '../style/Branch.css';
import { Color } from "../enum/Color";

interface BranchProp {
  text: string
  color: Color
}

const Branch: React.FC<BranchProp> = ({ text, color }) => {
  return (
    <>
    <div id="branch-box">
      <div id="branch" style={{ backgroundColor: color }}>
        <div id="branch-text-box">
          <p>{text}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Branch;