import React from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

interface MessageProp {
  successMessage: string
  errorMessage: string
}

const Message: React.FC<MessageProp> = ({ successMessage, errorMessage }) => {
  return (
    <>
    <SuccessMessage message={successMessage} />
    <ErrorMessage message={errorMessage} />
    </>
  )
}

export default Message;