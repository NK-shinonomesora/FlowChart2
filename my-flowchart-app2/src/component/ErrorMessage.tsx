import React from "react";
import '../style/ErrorMessage';

const ErrorMessage: React.FC = () => {
  return (
    <div
      id="error-message-box"
      style={{ display: "none" }}
    >
      <div id="error-message">
        <p id="error-message-text">保存に失敗しました。もう一度、保存ボタンをクリックしてください。</p>
      </div>
    </div>
  )
}

export default ErrorMessage;