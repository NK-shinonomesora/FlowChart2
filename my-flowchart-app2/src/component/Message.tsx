import React from "react";
import '../style/Message.css';

interface MessageProp {
  message: string
  color: string
  background: string
}

const Message: React.FC<MessageProp> = ({ message, color, background }) => {
  return (
    <div
      id="message-box"
      style={{ display: "none", background: background }}
    >
      <div
        id="message"
      >
        <p
          id="message-text"
          style={{ color: color }}
        >{message}
        </p>
      </div>
    </div>
  )
}

export default Message;