import React from "react";
import '../style/SuccessMessage';

const SuccessMessage: React.FC = () => {
  return (
    <div
      id="success-message-box"
      style={{ display: "none" }}
    >
      <div id="success-message">
        <p id="success-message-text">保存に成功しました</p>
      </div>
    </div>
  )
}

export default SuccessMessage;