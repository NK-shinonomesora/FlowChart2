import React from "react";
import '../style/Process.css';
import { Color } from "../enum/Color";

interface ProcessProp {
  text: string
  color: Color
}

const Process: React.FC<ProcessProp> = ({ text, color }) => {
  return (
    <>
    <div id="process" style={{ backgroundColor: color }}>
      <div id="process-text-box">
        <p>{text}</p>
      </div>
    </div>
    </>
  )
}

export default Process;