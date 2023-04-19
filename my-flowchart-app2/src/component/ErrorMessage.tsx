import React from "react";
import '../style/ErrorMessage';

interface ErrorMessageProp {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProp> = ({ message }) => {
  return (
    <div
      id="error-message-box"
      style={{ display: "none" }}
    >
      <div id="error-message">
        <p id="error-message-text">{message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage;