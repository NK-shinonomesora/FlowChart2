import React from "react";
import '../style/SuccessMessage';

interface SuccessMessageProp {
  message: string
}

const SuccessMessage: React.FC<SuccessMessageProp> = ({ message }) => {
  return (
    <div
      id="success-message-box"
      style={{ display: "none" }}
    >
      <div id="success-message">
        <p id="success-message-text">{message}</p>
      </div>
    </div>
  )
}

export default SuccessMessage;