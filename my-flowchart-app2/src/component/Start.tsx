import React from "react";
import '../style/Start.css';
import { Color } from "../enum/Color";

interface StartProp {
  color: Color
}

const Start: React.FC<StartProp> = ({ color }) => {
  return (
    <>
    <div id="start" style={{ backgroundColor: color }}>
      <div id="start-text-box">
        <p>Start</p>
      </div>
    </div>
    </>
  )
}

export default Start;